const memberModel = (sequelize, DataTypes) => {
    const Member = sequelize.define(
        'Member',
        {
            id : {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            pw : {
                type : DataTypes.STRING(511),
                allowNull : false
            },
            name : {
                type : DataTypes.STRING(15),
                allowNull : false
            },
            userid : {
                type : DataTypes.STRING(15),
                allowNull : false
            }
        },
        {
            freezeTableName: true, // 테이블 명 고정 -> 고정안하면 얘네가 알아서 복수형으로 바꾼다
            // timestamps : false, // 데이터가 추가되고 수정된 시간을 자동으로 컬럼 만들어서 기록
        });
        return Member;
}

module.exports = memberModel