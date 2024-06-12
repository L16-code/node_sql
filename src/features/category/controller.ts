import { Request, Response } from "express";
import CategoryService from './service'; 
export async function createCategory(req: Request, res: Response) {
    try {
        const result = await CategoryService.createCategory(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}
