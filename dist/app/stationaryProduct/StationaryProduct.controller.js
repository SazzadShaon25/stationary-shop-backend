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
exports.ProductControllers = void 0;
const StationaryProduct_service_1 = require("./StationaryProduct.service");
//create product
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = req.body.products;
        const result = yield StationaryProduct_service_1.ProductServices.createProductIntoDB(product);
        res.status(200).json({
            message: "Product created successfully",
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
// get all products
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        const result = yield StationaryProduct_service_1.ProductServices.getAllProductsFromDb(searchTerm);
        if (!result) {
            res.status(404).json({
                message: "Products not found",
                success: false,
            });
        }
        else {
            res.status(200).json({
                message: "Products retrieved successfully",
                success: true,
                data: result,
            });
        }
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
//get product by id
const getSignleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const result = yield StationaryProduct_service_1.ProductServices.getSignleProductFromDb(productId);
        if (!result) {
            res.status(404).json({
                message: "Product not found",
                success: false,
            });
        }
        else {
            res.status(200).json({
                message: "Product retrieved successfully",
                success: true,
                data: result,
            });
        }
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
//delete product by id
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const result = yield StationaryProduct_service_1.ProductServices.deleteProductFromDb(productId);
        if (!result) {
            res.status(404).json({
                message: "Product not found",
                success: false,
            });
        }
        else {
            res.status(200).json({
                status: true,
                message: "Product deleted successfully",
                data: result
            });
        }
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
//update product by id
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const updatedData = req.body;
        const result = yield StationaryProduct_service_1.ProductServices.updateProductFromDb(productId, updatedData);
        if (!result) {
            res.status(404).json({
                message: "Product not found",
                success: false,
            });
        }
        else {
            res.status(200).json({
                status: true,
                message: "Product updated successfully",
                data: result
            });
        }
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
exports.ProductControllers = {
    createProduct,
    getAllProducts,
    getSignleProduct,
    deleteProduct,
    updateProduct
};
