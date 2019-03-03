module.exports = {
    port: process.env.PORT || 8081,
    db: {
        // database: process.env.DB_NAME || 'heron_haven',
        connectionString: process.env.DATABASE_URL || 'postgresql-pointy-57955',
        user: process.env.DB_USER || '',
        password: process.env.DB_PASS || '',
        options: {
            dialect: process.env.DIALECT || 'postgres',
            host: process.env.HOST || 'localhost'
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
};
