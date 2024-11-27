import mongoose, { Schema } from "mongoose";
import { Order } from "./Order.interface";
import isEmail from "validator/lib/isEmail";

const OrderSchema = new Schema<Order>({
    email:{
        type: String,
        required: [true, 'Email is required'],
        validate:{
            validator: (value: string) => isEmail(value),
            message: "[VALUE] is not valid. Please provide a valid email address"
        }
    },
    product:{
        type: String,
        required: [true, 'Product id is required']
    },
    quantity:{
        type: Number,
        required: [true, 'quantity is required'],
         min: [1, 'Quantity must be at least 1'],
    },
    totalPrice: {
        type: Number,
        required: [true, 'total price is required'],
        min: [0, 'Total price cannot be a negative number'],
    },

},
{
    timestamps: true
}
)

export const OrderModel = mongoose.model('OrderModel', OrderSchema);