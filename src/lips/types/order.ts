import {ObjectId} from "mongoose"
import { OrderStatus } from "../enum/order.enums";

export interface OrderItem {
    _id: ObjectId, 
    itemQuatity: number,
    itemPrice: number,
    productId:ObjectId,
    createdAt: Date
    updatedAt: Date
}


export interface Order {
    _id: ObjectId,
    orderTotal: number;
    orderDelivery:number;
    orderStatus: OrderStatus;
    memberId: ObjectId;
    createdAt: Date
    updatedAt: Date
}

export interface OrderItemInput {
    itemQuantity: number,
    itemPrice: number,
    productId:ObjectId,
    OrderId?:ObjectId,
}