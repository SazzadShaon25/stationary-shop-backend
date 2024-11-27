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
        POST  https://stationary-shop-backened.vercel.app/api/v1/products
    Get All Products
        GET https://stationary-shop-backened.vercel.app/api/v1/products?searchTerm={name/brand/category}
    Get Specific Product
        GET https://stationary-shop-backened.vercel.app/api/v1/products/:productId
    Update Product
        PUT https://stationary-shop-backened.vercel.app/api/v1/products/:productId
    Delete Product
        DELETE https://stationary-shop-backened.vercel.app/api/v1/products/:productId

**Orders**

    Place an Order
        POST https://stationary-shop-backened.vercel.app/api/v1/orders
    Calculate Revenue
        GET https://stationary-shop-backened.vercel.app/api/v1/orders/revenue

Technologies Used
Backend:

    Express.js with TypeScript
    Mongoose for MongoDB integration

# Video Explanation

   https://drive.google.com/file/d/1Qsc64Z96sOr0HzLSLv78t-XGWDNzQBSb/view?usp=drive_link

# Live Deployment
    1. https://stationary-shop-backened.vercel.app
    2. https://stationary-shop-backened.vercel.app/api/v1/products
    3. https://stationary-shop-backened.vercel.app/api/v1/orders

