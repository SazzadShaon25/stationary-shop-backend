import { ProductModel } from "../stationaryProduct/StationaryProduct.model";
import { Order } from "./Order.interface";
import { OrderModel } from "./Order.model";

const createOrderIntoDb = async(order: Order)=>{
  // Fetch product details
  const product = await ProductModel.findById(order.product);
  if (!product) {
      throw new Error("Product not found");
  };
   // Check for sufficient stock
   if (product.quantity < order.quantity) {
    throw new Error(`Insufficient stock. Only ${product.quantity} items available.`);
  };
    // Deduct quantity and update product's inStock status
  product.quantity -= order.quantity;
  product.inStock = product.quantity > 0;
  await product.save();

  const result = await OrderModel.create(order);
  return result;
}

const calculateRevenue = async()=>{
    const result = await OrderModel.aggregate([
        {
            $lookup: {
                from: "productmodels", 
                localField: "product",
                foreignField: "_id", 
                as: "productDetails"
            }
        },
        {
            $unwind: "$productDetails" 
        },
        {
            $project: {
                totalRevenue: { $multiply: ["$quantity", "$productDetails.price"] } 
            }
        },
        {
            $group: {
                _id: null,
                totalRevenue: { $sum: "$totalRevenue" } 
            }
        }
    ]);

    return result.length > 0 ? result[0].totalRevenue : 0; 
}
export const OrderServices ={
    createOrderIntoDb,
     calculateRevenue
}