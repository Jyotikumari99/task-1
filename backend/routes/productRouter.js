const express = require("express");
const { getAllProducts, createProduct, updateProduct, deleteProduct } = require("../controller/productController");
const productRouter = express.Router();

// Get All Products
productRouter.get("/get", getAllProducts);

// Create a Product
productRouter.post("/create", createProduct);

// Update a Product
productRouter.put("/update/:id", updateProduct);

// Delete a Product
productRouter.delete("/delete/:id", deleteProduct);

module.exports = productRouter;
