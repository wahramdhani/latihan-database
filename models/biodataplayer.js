'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class biodataPlayer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  biodataPlayer.init({
    email: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
    userId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'biodataPlayer',
    paranoid: true
  });

  biodataPlayer.associate = function (models) {
    biodataPlayer.belongsTo(models.superAdmin, {
      foreignKey: "userId"
    })
  }
  return biodataPlayer;
};