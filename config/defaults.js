export default {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8080,
    database: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        pass: process.env.DB_PASS || 'root',
        name: process.env.DB_NAME || 'chatty',
        numConnections: process.env.DB_NUM_CONNS || 15
    },
    firebase_priv_key_path: '/config/firebase-private-key.json',
    firebase_db_url: process.env.FIREBASE_DB_URL || 'https://chatty-428c3.firebaseio.com',
    firebase_db_main_dir: process.env.FIREBASE_DB_MAIN_DIR || 'Users'
};
