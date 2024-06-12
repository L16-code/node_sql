import { getConnection, query } from "../../db/dbConnect";

interface IUserData {
    username: string;
    email: string;
    phone: string;
    address: string;
    inserted_at: Date;
    updated_at: Date;
}

interface IResponse<T> {
    message: string;
    data?: T;
    success: boolean;
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
class UserService {
    public async createUser(user: IUserData) {
        const connection = await getConnection();
        try {
            const curr_time =formatDate(new Date());
            const sql = `INSERT INTO users (name, email, phone, address, inserted_at, updated_at) VALUES ("${user.username}", "${user.email}", ${user.phone}, "${user.address}", "${curr_time}", "${curr_time}")`;
            const result = await query(sql);
            return { message: "User created successfully", data: result, success: true };
        } catch (error) {
            return { message: "Error creating user", success: false };
        } finally {
            connection.release();
        }
    }
}

export default new UserService();












