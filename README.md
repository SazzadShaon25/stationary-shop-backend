# Stationery Shop API

An Express-based application developed with TypeScript, MongoDB, mongoose to manage a stationery shop. The API supports CRUD operations for products and orders.

# Project Structure

**Folders:**

    src/: Contains all TypeScript source files.
    dist/: Contains JavaScript files compiled from TypeScript.

**Key Files and Folders in src/:**

    server.ts: Establishes the database connection and starts the server.
    app.ts: Sets up  routes for the API.
    app/: Contains two modules:
        stationaryProduct/: Handles all logic for managing stationery products.
        order/: Handles all logic for managing customer orders.

**Each module contains:**

    interface.ts: Defines TypeScript interfaces for the module's data structure.
    model.ts: Defines the Mongoose schema and model.
    route.ts: Handles API routing for the module.
    controller.ts: Handles request-response logic.
    service.ts: Contains business logic for interacting with the database.

# Features

1. Stationery Products Management

    Create a Product: Add a new stationery product to the database.
    Get All Products: Retrieve all stationery products with optional name, brand, category based search.
    Get a Specific Product: Retrieve detailed information about a specific product by ID.
    Update a Product: Modify product details by using product id.
    Delete a Product: Remove a product from the database.

2. Orders Management

    Place an Order: Create a new order.
    Revenue Calculation: Calculate total revenue generated from all orders using MongoDB aggregation.

# API Endpoints
 
 **Stationery Products**

    Create Product
        POST /api/products
    Get All Products
        GET /api/products?searchTerm={name/brand/category}
    Get Specific Product
        GET /api/products/:productId
    Update Product
        PUT /api/products/:productId
    Delete Product
        DELETE /api/products/:productId

**Orders**

    Place an Order
        POST /api/orders
    Calculate Revenue
        GET /api/orders/revenue

Technologies Used
Backend:

    Express.js with TypeScript
    Mongoose for MongoDB integration

# Video Explanation

    Video Explanation Link (Replace # with the actual link)

# Live Deployment

    https://stationary-shop-backened.vercel.app

