import mongoose, {Schema} from "mongoose";
import {  OrderStatus } from "../lips/enum/order.enums";

const OrderSchema = new Schema ({
    orderTotal: {
        type: Number,
        required : true,
    },

    orderDelivery: {
        type:Number,
        required : true,
    },

    orderStatus: {
        type: String,
        enum: OrderStatus,
        default: OrderStatus.PAUSE,
    },

    memberId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Member',
    },

},
{ timestamps:true}
);

export default mongoose.model('Order', OrderSchema )


