import { getConnection, query } from "../../db/dbConnect";
interface IProfileData {
    name: string;
    price: string;
    description: string;
    cat_id: string;
    inserted_at: Date;
    updated_at: Date;
}

function formatDate(date: Date): string {
    const padZero = (num: number): string => (num < 10 ? `0${num}` : `${num}`);

    const year = date.getFullYear();
    const month = padZero(date.getMonth() + 1);
    const day = padZero(date.getDate());

    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    const seconds = padZero(date.getSeconds());

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
class ProductService {
    public async createProducts(products: IProfileData) {
        const connection = await getConnection();
        try {
            const curr_time =formatDate(new Date());
            const sql = `INSERT INTO products (name, price, description, cat_id, inserted_at, updated_at) VALUES ("${products.name}", ${products.price}, "${products.description}", ${products.cat_id}, "${curr_time}", "${curr_time}")`;
            const result = await query(sql);
            return { message: "products created successfully", data: result, success: true };
        } catch (error) {
            return { message: "Error creating products", success: false };
        } finally {
            connection.release();
        }
    }
    public async GetProductByCategory(cat_id:number) {
        const connection = await getConnection();
        try {
            const sql = `SELECT * FROM products WHERE cat_id = ${cat_id}`;
            const result: any= await query(sql);
            if (result.length === 0) {
                return { message: 'No products found for the given category', success: false };
            }
            return { message: "products found successfully", data: result, success: true };
        } catch (error) {
            return { message: "Error fetching products", success: false };
        } finally {
            connection.release();
        }
    }
    public async GetProduct(cat_id:number) {
        const connection = await getConnection();
        try {
            const sql = `SELECT products.* , category.id as category_id FROM products join products ON products.cat_id = products.category`;
            const result: any= await query(sql);
            if (result.length === 0) {
                return { message: 'No products found for the given category', success: false };
            }
            return { message: "products found successfully", data: result, success: true };
        } catch (error) {
            return { message: "Error fetching products", success: false };
        } finally {
            connection.release();
        }
    }
}

export default new ProductService();












