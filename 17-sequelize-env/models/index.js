const Sequelize = require('sequelize'); // sequelize 패키지 등록
const config = require(__dirname + '/../config/config.json')["development"]; // json파일의 development키의 값들에 접근(db연결 정보)
const db = {}; // 빈 객체

// sequelize 객체 생성
const  sequelize = new Sequelize(config.database, config.username, config.password, config);

// 모델 불러오기
const PlayerModel = require('./Player')(sequelize, Sequelize); // playerModel 함수를 불러온 후 매개변수 sequelize, Sequelize를 전달한 것
const ProfileModel = require('./Profile')(sequelize, Sequelize); // playerModel 함수를 불러온 후 매개변수 sequelize, Sequelize를 전달한 것
const TeamModel = require('./Team')(sequelize, Sequelize); // playerModel 함수를 불러온 후 매개변수 sequelize, Sequelize를 전달한 것
const GameModel = require('./Game')(sequelize, Sequelize);
const TeamGameModel = require('./TeamGame')(sequelize, Sequelize);

// 모델간 관계 연결
// 1) Player : Profile = 1 : 1
// 하나의 선수당 하나의 프로필을 가짐
PlayerModel.hasOne(ProfileModel, { 
  // cascade 옵션 : player 가 삭제/수정 되는 경우 profile 도 함께 삭제/업데이트
  onDelete: 'CASCADE', 
  onUpdate: 'CASCADE',
  // ProfileModel 에 'player_id' 외래키 생성 
  foreignKey: 'player_id',
  // PlayerModel의 'player_id' 컬럼 참조
  sourceKey: 'player_id'
});
ProfileModel.belongsTo(PlayerModel, {
  // ProfileModel 에 'player_id' 외래키 생성 
  foreignKey: 'player_id',
  // 참조하게 될 키는 'player_id'
  targetKey: 'player_id'
})

// 2) Team : Player = 1: N
// 한 팀에는 여러 명의 선수가 존재
TeamModel.hasMany(PlayerModel, {
  foreignKey: 'team_id',
  sourceKey: 'team_id'
});
PlayerModel.belongsTo(TeamModel, {
  foreignKey: 'team_id',
  targetKey: 'team_id'
});

// 3) Team : Game = N : M
// 하나의 팀은 여러 게임 가능, 한 게임에는 여러 팀이 참여
// TeamGame : 관계 표시 -> through 키워드로 설정
TeamModel.belongsToMany(GameModel, {
  through : TeamGameModel, // 관계테이블
  foreignKey : 'team_id', // TeamGameModel 에서 TeamModel을 참조하는 fk
  otherKey : 'game_id' // TeamGameModel 에서 GameModel을 참조하는 fk
})
GameModel.belongsToMany(TeamModel, {
  through : TeamGameModel,
  foreignKey : 'game_id',
  otherKey : 'team_id'
})


// db 객체에 할당
db.sequelize = sequelize;
db.Sequelize = Sequelize;
// db = { sequelize:sequelize. Sequelize : Sequelize }

db.Player = PlayerModel;
db.Profile = ProfileModel;
db.Team = TeamModel;
// db = { sequelize:sequelize. Sequelize : Sequelize, Player :PlayerModel, Profile: ProfileModel,Team:TeamModel }
db.Game = GameModel;
db.TeamGame = TeamGameModel;

module.exports = db;
