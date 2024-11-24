"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderControllers = void 0;
const Order_service_1 = require("./Order.service");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = req.body.orders;
        const result = yield Order_service_1.OrderServices.createOrderIntoDb(order);
        res.status(200).json({
            message: "Order created successfully",
            success: true,
            data: result
        });
    }
    catch (error) {
        // Check for Mongoose validation errors
        if (error.name === "ValidationError") {
            res.status(400).json({
                message: "Validation failed",
                success: false,
                error: {
                    name: error.name,
                    errors: error.errors
                },
                stack: error.stack
            });
        }
        else {
            // Handle other errors
            res.status(500).json({
                message: "An unexpected error occurred",
                success: false,
                error: error.message,
                stack: error.stack
            });
        }
    }
});
const totalRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Order_service_1.OrderServices.calculateRevenue();
        res.status(200).json({
            message: "Revenue calculated successfully",
            success: true,
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            message: "An unexpected error occurred",
            success: false,
            error: error.message,
            stack: error.stack
        });
    }
});
exports.OrderControllers = {
    createOrder,
    totalRevenue
};
