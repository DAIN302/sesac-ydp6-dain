const Sequelize = require('sequelize');
const env = process.env.NODE_ENV;
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

config.database = process.env.DATABASE;
config.username = process.env.USERNAME;
config.password = process.env.PASSWORD;

const  sequelize = new Sequelize(config.database, config.username, config.password, config);

// 모델 불러오기
const MemberModel = require('./Member')(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Member = MemberModel

module.exports = db;
