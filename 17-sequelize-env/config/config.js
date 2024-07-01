const dotenv = require('dotenv');
const path = require('path');
dotenv.config({
    path: path.resolve(__dirname, '.env'),
}); 

const dbName = process.env.DATABASE_NAME;
const dbUser = process.env.DATABASE_USER;
const dbPw = process.env.DATABASE_PW;

exports.config = {
    development : {
        username: dbUser, // env
        password: dbPw, // env
        database: dbName, // env
        host: "127.0.0.1",
        dialect: "mysql"
    },
    test : {
        username : "root",
        password : null,
        database : "database_test",
        host : "127.0.0.1",
        direct : "mysql"
    },
    production : {
        username : "root",
        password : null,
        database : "database_production",
        host : "127.0.0.1",
        direct : "mysql"
    }
}