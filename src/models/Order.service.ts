import { Order, OrderInquery, OrderItem, OrderItemInput, OrderUpdateInput } from "../lips/types/order";
import OrderItemModel from "../scheme/OrderItem.model";
import OrderModel from "../scheme/Order.model";
import { Member } from "../lips/types/member";
import { shapeIntMongooseObjectId } from "../lips/config";
import { HttpCode, Message } from "../lips/Errors";
import Errors from "../lips/Errors";
import {ObjectId} from 'mongoose'
import { OrderStatus } from "../lips/enum/order.enums";
import MemberService from "./Member.service";




class OrderService {
    private readonly orderModel;
    private readonly orderItemModel;
    private  readonly memberService;
    
    

    constructor() {
        this.orderItemModel= OrderItemModel,
        this.orderModel= OrderModel
        this.memberService =  new MemberService()
       
    }

    public async createOrder(
        member: Member,
        input: OrderItemInput[]
    ):Promise<Order> {
      const memberId = shapeIntMongooseObjectId(member._id);
      const amount = input.reduce((accumulator: number, item:OrderItemInput) => {
        return accumulator + item.itemPrice * item.itemQuantity;
      }, 0)
       const delivery= amount <100 ? 5 : 0;
    
       try{
        const newOrder:Order = await this.orderModel.create({
            orderTotal: amount + delivery,
            orderDelivery: delivery,
            memberId: memberId,
        })

        const orderId = newOrder._id;
        console.log('orderId:',orderId);
        await this.recordOrderItem(orderId, input)
        
        return newOrder

       }catch(err){
        console.log('Error, model:createOrder:', err);
        throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED); 
       }

    }

    private async recordOrderItem(orderId: ObjectId, input: OrderItemInput[]): Promise<void> {

        const promisedList = input.map(async (item:OrderItemInput) => {
            item.orderId = orderId;
            item.productId = shapeIntMongooseObjectId(item.productId);
            await this.orderItemModel.create(item);
            return 'INSERTED'
            
        });

        console.log('promisedList', promisedList);
        const orderItemState = await Promise.all(promisedList);
        console.log('orderItemState', orderItemState);
        
        
    };

    public async getMyOrders(member: Member, inquiry: OrderInquery): Promise<Order[]> {
        const memberId = shapeIntMongooseObjectId(member._id);
        const matches = {memberId: memberId, orderStatus: inquiry.orderStatus};

        const result = await this.orderModel
        .aggregate([
            {$match: matches},
            {$sort: {updateAt: -1} },
            {$skip: (inquiry.page -1) * inquiry.limit},
            {$limit: inquiry.limit},
            {
                $lookup: {
                    from: 'orderItems',
                    localField: '_id',
                    foreignField: 'orderId',
                    as: 'orderItems',
                },
               
            },
             {
                    $lookup: {
                        from: 'products',
                        localField:'orderItems.productId',
                        foreignField: '_id',
                        as: 'ProductData'
                    }
                }
        ])
        .exec();
        if(!result) throw new Errors(HttpCode.NOT_FOUNT, Message.NO_DATA_FOUND);

        return result
    }

    public async updateOrder(
        member: Member, 
        input: OrderUpdateInput
    ): Promise<Order> {
     const memberId = shapeIntMongooseObjectId(member._id),
           orderId = shapeIntMongooseObjectId(input.orderId),
           orderStatus = input.orderStatus;
           
       const result = await this.orderModel
        .findOneAndUpdate(
            {
                memberId: memberId,
                _id: orderId,
            },
            {orderStatus: orderStatus},
            {new: true}
        )   
        .exec();
       
         if(!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);
           
         if (orderStatus === OrderStatus.PROCESS){
            await this.memberService.addUserPoint(member, +1)
         }
        return result
    }
}

export default OrderService