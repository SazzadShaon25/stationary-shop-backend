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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const isEmail_1 = __importDefault(require("validator/lib/isEmail"));
const OrderSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        validate: {
            validator: (value) => (0, isEmail_1.default)(value),
            message: "[VALUE] is not valid. Please provide a valid email address"
        }
    },
    product: {
        type: String,
        required: [true, 'Product id is required']
    },
    quantity: {
        type: Number,
        required: [true, 'quantity is required'],
        min: [1, 'Quantity must be at least 1'],
    },
    totalPrice: {
        type: Number,
        required: [true, 'total price is required'],
        min: [0, 'Total price cannot be a negative number'],
    },
}, {
    timestamps: true
});
exports.OrderModel = mongoose_1.default.model('OrderModel', OrderSchema);
