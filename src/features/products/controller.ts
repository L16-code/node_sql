import { Request, Response } from "express";
import ProductService from './service'; 
export async function createProduct(req: Request, res: Response) {
    try {
        const result = await ProductService.createProducts(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}
export async function GetProductByCategory(req: Request, res: Response) {
    try {
        // console.log(req.params.cat_id)
        const cat_id=parseInt(req.params.cat_id as string);
        const result = await ProductService.GetProductByCategory(cat_id);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}