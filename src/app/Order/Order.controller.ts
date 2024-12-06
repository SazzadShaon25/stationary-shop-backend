import { Request, Response} from "express";
import { OrderServices } from "./Order.service";

const createOrder = async(req: Request, res: Response)=>{
    try{
        const order = req.body;
        const result = await OrderServices.createOrderIntoDb(order);
        
        res.status(200).json({
            message: "Order created successfully",
            status: true,
            data: result
        })

    }catch (error: any) {
        // Check for Mongoose validation errors
        if (error.name === "ValidationError") {
            res.status(400).json({
                message: "Validation failed",
                status: false,
                error: {
                    name: error.name,
                    errors: error.errors
                },
                stack: error.stack
            });

        } else {
            // Handle other errors
            res.status(500).json({
                message: "An unexpected error occurred",
                success: false,
                error: error.message,
                stack: error.stack
            });
        }
    }
}

const totalRevenue = async(req: Request, res: Response)=>{
    try{
        const result = await OrderServices.calculateRevenue();
        
        res.status(200).json({
            message: "Revenue calculated successfully",
            success: true,
            data: result
        })

    }catch (error: any) {
        res.status(500).json({
            message: "An unexpected error occurred",
            success: false,
            error: error.message,
            stack: error.stack
        });
    }
}

export const OrderControllers = {
    createOrder,
    totalRevenue
}