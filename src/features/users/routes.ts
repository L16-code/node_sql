import express from "express";
import { createUser } from "./controller";
const routes = express.Router();
routes.post("/user", createUser);
export { routes };
