import { Request, Response } from "express";

import { ProductServices } from "./StationaryProduct.service";


//create product
const createProduct = async(req: Request, res: Response) =>{

    try{
        const product = req.body.products;
        const result = await ProductServices.createProductIntoDB(product);
        
        res.status(200).json({
            message: "Product created successfully",
            success: true,
            data: result
        })

    }catch (error: any) {
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

// get all products
const getAllProducts = async(req: Request, res: Response) =>{

    try{
        const { searchTerm } = req.query;
        const result = await ProductServices.getAllProductsFromDb(searchTerm);

        if (!result) {
            res.status(404).json({
                message: "Products not found",
                success: false,
            });
        } else {
            res.status(200).json({
                message: "Products retrieved successfully",
                success: true,
                data: result,
            });
        }

    }catch (error: any) {

        res.status(500).json({
            message: "An unexpected error occurred",
            success: false,
            error: error.message,
            stack: error.stack
        });
    }

}

//get product by id
const getSignleProduct = async(req: Request, res: Response) =>{
    
    try{
        const productId = req.params.productId;
        const result = await ProductServices.getSignleProductFromDb(productId);

        if (!result) {
            res.status(404).json({
                message: "Product not found",
                success: false,
            });
        } else {
            res.status(200).json({
                message: "Product retrieved successfully",
                success: true,
                data: result,
            });
        }

    }catch (error: any) {

        res.status(500).json({
            message: "An unexpected error occurred",
            success: false,
            error: error.message,
            stack: error.stack
        });
    }

}

//delete product by id
const deleteProduct = async(req: Request, res: Response) =>{

    try{
        const productId = req.params.productId;
        const result = await ProductServices.deleteProductFromDb(productId);

        if (!result) {
            res.status(404).json({
                message: "Product not found",
                success: false,
            });
        } else {
            res.status(200).json({
                status: true,
                message: "Product deleted successfully",
                data: result
            })
        }
        
    }catch (error: any) {

        res.status(500).json({
            message: "An unexpected error occurred",
            success: false,
            error: error.message,
            stack: error.stack
        });
    }

}

//update product by id
const updateProduct = async(req: Request, res: Response) =>{

    try{
        const productId = req.params.productId;
        const updatedData = req.body;
        const result = await ProductServices.updateProductFromDb(productId, updatedData);

        if (!result) {
            res.status(404).json({
                message: "Product not found",
                success: false,
            });
        } else {
            res.status(200).json({
                status: true,
                message: "Product updated successfully",
                data: result
            })
        }
        
    }catch (error: any) {
        
        res.status(500).json({
            message: "An unexpected error occurred",
            success: false,
            error: error.message,
            stack: error.stack
        });
    }

}

export const ProductControllers = {
    createProduct, 
    getAllProducts,
    getSignleProduct,
    deleteProduct, 
    updateProduct
}
