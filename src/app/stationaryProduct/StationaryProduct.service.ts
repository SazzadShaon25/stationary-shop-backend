import { Product } from "./StationaryProduct.interface";
import { ProductModel } from "./StationaryProduct.model";

const createProductIntoDB = async (product: Product)=>{
    const result = await ProductModel.create(product);
    return result;
}

const getAllProductsFromDb = async (searchTerm: any) => {
    let query = {};
    if (searchTerm) {
        query = {
            $or: [
                { name: { $regex: searchTerm, $options: 'i' } }, 
                { brand: { $regex: searchTerm, $options: 'i' } }, 
                { category: { $regex: searchTerm, $options: 'i' } }
            ],
        };
    }

    // Fetching all products if no searchTerm is provided
    const result = await ProductModel.find(query);
    return result;
};


const getSignleProductFromDb = async(id: string) =>{
    const result = await ProductModel.findById(id);
    return result;
}

const deleteProductFromDb = async(id: string) =>{
    const result = await ProductModel.deleteOne({_id: id});
    return result;
}

const updateProductFromDb = async(id: string, updateData: object) =>{
    const result = await ProductModel.findOneAndUpdate(
        {_id: id},
        updateData,
        {new: true}
    );
    return result;
}

export const ProductServices = {
    createProductIntoDB,
    getAllProductsFromDb,
    getSignleProductFromDb,
    deleteProductFromDb,
    updateProductFromDb
}