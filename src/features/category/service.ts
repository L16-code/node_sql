import { getConnection, query } from "../../db/dbConnect";

interface INameData {
    name: string;
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
class CategoryService {
    public async createCategory(category: INameData) {
        const connection = await getConnection();
        try {
            const curr_time =formatDate(new Date());
            const sql = `INSERT INTO category (name, inserted_at, updated_at) VALUES ("${category.name}", "${curr_time}", "${curr_time}")`;
            const result = await query(sql);
            return { message: "category created successfully", data: result, success: true };
        } catch (error) {
            return { message: "Error creating category", success: false };
        } finally {
            connection.release();
        }
    }
}

export default new CategoryService();












