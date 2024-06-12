import express from "express";
import { createCategory } from "./controller";
const category = express.Router();
category.post("/add-category", createCategory);
export { category };
