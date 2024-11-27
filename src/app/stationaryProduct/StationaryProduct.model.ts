import mongoose, { Schema } from "mongoose";
import { Product } from "./StationaryProduct.interface";

const ProductSchema = new Schema<Product>({
    name:{
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minlength: [3, "Name must be at least 3 characters long"],
        maxlength: [50, "Name cannot exceed 50 characters"]
    },
    brand:{
        type: String,
        required: [true, "Brand name is required"],
        trim: true,
        minlength: [2, "Brand name must be at least 2 characters long"],
        maxlength: [30, "Brand name cannot exceed 30 characters"]
    },
    price:{
        type: Number,
        required: [true, "price is required"],
        min: [0, "Price cannot be negative"],
    },
    category:{
        type: String,
        enum: {
            values: ['Writing', 'Office Supplies', 'Art Supplies', 'Educational', 'Technology'],
            message: "{VALUE} is not valid. Category mut be 'Writing', 'Office Supplies', 'Art Supplies', 'Educational', 'Technology'"
        },
        required: [true, "Category is required"],
    },
    description:{
        type: String,
        required: [true, "description name is required"],
        trim: true,
        minlength: [10, "Description must be at least 10 characters long"],
        maxlength: [500, "Description cannot exceed 500 characters"]
    },
    quantity:{
        type: Number,
        required: [true, "quantity is required"],
        min: [0, "Quantity cannot be negative"],
        validate: {
            validator: (value: number) => Number.isInteger(value),
            message: "Quantity must be an integer value"
        }
    },
    inStock:{
        type: Boolean,
        required: [true, "inStock name is required"],
        trim: true,
    }
},
{
    timestamps: true
})

export const ProductModel = mongoose.model('ProductModel', ProductSchema);