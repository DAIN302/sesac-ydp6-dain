// Player 모델 정의 = mysql에서 Player table생성
const playerModel = (sequelize, DataTypes) => {
    // 첫번째 인자 sequelize : models/index.js 의 sequelize(db연결 정보를 입력하여 생성한 객체)
    // 두번째 인자 DataTypes : models/index.js 의 Sequelize(sequelize 패키지 자체)
    const Player = sequelize.define(
        // param1 : model 이름
        'Player',
        // param2  : 컬럼 정의 
        {
            player_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING(63),
                allowNull: false,
            },
            age: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }
        },
        // param3 : 모델의 옵션 정의
        {
            freezeTableName: true, // 테이블 명 고정 -> 고정안하면 얘네가 알아서 복수형으로 바꾼다
            // timestamps : false, // 데이터가 추가되고 수정된 시간을 자동으로 컬럼 만들어서 기록
        });
    return Player;
}

module.exports = playerModel;