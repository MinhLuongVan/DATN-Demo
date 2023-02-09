import mongoose from "mongoose";
import { Schema,Document } from 'mongoose';
interface CartType extends Document {
    userId: string;
    productId: string;
    quantity: number;
}
 const CartSchema = new Schema<CartType>({
    userId:{
        type: String,
        ref: 'User'
    },
    productId: {
        type: String,
        ref: 'Product'
    },
    quantity: {
        type: Number,
    }
 },
    { timestamps: true}
 );
 export const Cart = mongoose.model<CartType>("Cart",CartSchema);