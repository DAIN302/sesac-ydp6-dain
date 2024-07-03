const Sequelize = require('sequelize');
const env = process.env.NODE_ENV;
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

const  sequelize = new Sequelize(config.database, config.username, config.password, config);

// 모델 불러오기
const MemberModel = require('./Member')(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Member = MemberModel

module.exports = db;
