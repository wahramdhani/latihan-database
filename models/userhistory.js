'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  userHistory.init({
    timePlay: DataTypes.STRING,
    score: DataTypes.STRING,
    userId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'userHistory',
    paranoid: true
  });
  userHistory.associate = function (models) {
    userHistory.belongsTo(models.biodataPlayer, {
      foreignKey: "userId"
    })
  }
  return userHistory;
};