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
exports.ProductServices = void 0;
const StationaryProduct_model_1 = require("./StationaryProduct.model");
const createProductIntoDB = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield StationaryProduct_model_1.ProductModel.create(product);
    return result;
});
const getAllProductsFromDb = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    let query = {};
    if (searchTerm) {
        query = {
            $or: [
                { name: { $regex: searchTerm, $options: 'i' } },
                { brand: { $regex: searchTerm, $options: 'i' } },
                { category: { $regex: searchTerm, $options: 'i' } },
            ],
        };
    }
    const result = yield StationaryProduct_model_1.ProductModel.find(query);
    return result;
});
const getSignleProductFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield StationaryProduct_model_1.ProductModel.findById(id);
    return result;
});
const deleteProductFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield StationaryProduct_model_1.ProductModel.deleteOne({ _id: id });
    return result;
});
const updateProductFromDb = (id, updatedData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield StationaryProduct_model_1.ProductModel.updateOne({ _id: id }, { $set: updatedData });
    return result;
});
exports.ProductServices = {
    createProductIntoDB,
    getAllProductsFromDb,
    getSignleProductFromDb,
    deleteProductFromDb,
    updateProductFromDb
};
