"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const StationayProduct_route_1 = require("./app/stationaryProduct/StationayProduct.route");
const Order_route_1 = require("./app/Order/Order.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api/v1/products', StationayProduct_route_1.ProductRoutes);
app.use('/api/v1/orders', Order_route_1.OrderRoutes);
app.get('/', (req, res) => {
    res.send("Stationary Shop is running");
});
exports.default = app;
