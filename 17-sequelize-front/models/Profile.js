const ProfileModel = (sequelize, DataTypes) => {
    const Profile = sequelize.define('Profile', {
      profile_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      position: {
        type: DataTypes.STRING(63),
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING(63),
        allowNull: false,
      },
    }, {
      freezeTableName: true
    });
    
    return Profile;
};
  
module.exports = ProfileModel;