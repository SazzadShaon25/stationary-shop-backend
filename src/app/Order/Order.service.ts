import { Order } from "./Order.interface";
import { OrderModel } from "./Order.model";

const createOrderIntoDb = async(order: Order)=>{
    const result = await OrderModel.create(order);
    return result;
}

const calculateRevenue = async()=>{
    const result = await OrderModel.aggregate([
        {
          $project: {
            orderRevenue: { $multiply: ["$totalPrice", "$quantity"] },
          },
        },
        {
          $group: {
            _id: null, 
            totalRevenue: { $sum: "$orderRevenue" }, // Sum up all calculated revenues
          },
        },
      ]);
    return result;
}
export const OrderServices ={
    createOrderIntoDb,
     calculateRevenue
}