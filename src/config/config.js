module.exports = {
    connectionString: process.env.DATABASE_URL,
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'heron_haven',
        user: process.env.DB_USER || '',
        password: process.env.DB_PASS || '',
        options: {
            dialect: 'postgres',
            host: process.env.HOST || 'localhost',
            // ssl: true,
            protocol: 'postgres'
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
};
