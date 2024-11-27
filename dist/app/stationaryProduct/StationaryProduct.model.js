"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const ProductSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minlength: [3, "Name must be at least 3 characters long"],
        maxlength: [50, "Name cannot exceed 50 characters"]
    },
    brand: {
        type: String,
        required: [true, "Brand name is required"],
        trim: true,
        minlength: [2, "Brand name must be at least 2 characters long"],
        maxlength: [30, "Brand name cannot exceed 30 characters"]
    },
    price: {
        type: Number,
        required: [true, "price is required"],
        min: [0, "Price cannot be negative"],
    },
    category: {
        type: String,
        enum: {
            values: ['Writing', 'Office Supplies', 'Art Supplies', 'Educational', 'Technology'],
            message: "{VALUE} is not valid. Category mut be 'Writing', 'Office Supplies', 'Art Supplies', 'Educational', 'Technology'"
        },
        required: [true, "Category is required"],
    },
    description: {
        type: String,
        required: [true, "description name is required"],
        trim: true,
        minlength: [10, "Description must be at least 10 characters long"],
        maxlength: [500, "Description cannot exceed 500 characters"]
    },
    quantity: {
        type: Number,
        required: [true, "quantity is required"],
        min: [0, "Quantity cannot be negative"],
        validate: {
            validator: (value) => Number.isInteger(value),
            message: "Quantity must be an integer value"
        }
    },
    inStock: {
        type: Boolean,
        required: [true, "inStock name is required"],
        trim: true,
    }
}, {
    timestamps: true
});
exports.ProductModel = mongoose_1.default.model('ProductModel', ProductSchema);
