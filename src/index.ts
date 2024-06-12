import express from 'express';
import EnvConfig from './config/EnvConfig';
import { routes } from './features/users/routes';
import { category } from './features/category/routes';
import { product } from './features/products/routes';
const app = express();
app.use(express.json());
const env = EnvConfig();
const port = env.port;
app.use("/", routes);
app.use("/", category);
app.use("/", product);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});