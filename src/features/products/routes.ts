import express from "express";
import {  GetProductByCategory, createProduct } from "./controller";
const product = express.Router();
product.post("/add-product", createProduct);
product.get("/get-product-by-category/:cat_id", GetProductByCategory);
// product.get("/get-product-by-category", GetProductByCategory);

export { product };
