import mysql from 'mysql';
import { promisify } from 'util';

// Create a connection pool
export const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodeSql',
    port: 3306,
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 0,
    charset: 'utf8mb4_unicode_ci',
    multipleStatements: true
});

// Promisify the query and getConnection methods
export const getConnection = promisify(pool.getConnection).bind(pool);
export const query = promisify(pool.query).bind(pool);
