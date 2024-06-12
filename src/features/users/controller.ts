import { Request, Response } from "express";
import UserService from './service'; 
export async function createUser(req: Request, res: Response) {
    try {
        const user = req.body;
        console.log(req.body);
        const result = await UserService.createUser(user);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}
