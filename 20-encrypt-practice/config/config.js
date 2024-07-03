const path = require('path')
const dotenv = require('dotenv')
dotenv.config({
    path : path.resolve(__dirname, `../.env.${process.env.NODE_ENV}`),
    override : true
})

const config = {
    "development" : {
        "username" : process.env.USERNAME,
        "password" : process.env.PASSWORD,
        "database" : process.env.DATABASE,
        "host" : process.env.HOST,
        "dialect" : process.env.DIALECT
    }
}

module.exports = config