export default {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8080,
    database: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        pass: process.env.DB_PASS || 'root',
        name: process.env.DB_NAME || 'chatty',
        numConnections: process.env.DB_NUM_CONNS || 15
    }
};
