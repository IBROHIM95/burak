import { Order, OrderItem, OrderItemInput } from "../lips/types/order";
import OrderItemModel from "../scheme/OrderItem.model";
import OrderModel from "../scheme/Order.model";
import { Member } from "../lips/types/member";
import { shapeIntMongooseObjectId } from "../lips/config";
import { HttpCode, Message } from "../lips/Errors";
import Errors from "../lips/Errors";
import {ObjectId} from 'mongoose'

class OrderService {
    private readonly orderModel;
    private readonly orderItemModel;

    constructor() {
        this.orderItemModel= OrderItemModel,
        this.orderModel= OrderModel
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
            item.OrderId = orderId;
            item.productId = shapeIntMongooseObjectId(item.productId);
            await this.orderItemModel.create(item);
            return 'INSERTED'
            
        });

        console.log('promisedList', promisedList);
        const orderItemState = await Promise.all(promisedList);
        console.log('orderItemState', orderItemState);
        
        
    }
}

export default OrderService