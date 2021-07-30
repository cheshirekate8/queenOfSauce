'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fridge extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Fridge.belongsTo(models.User, { foreignKey: 'userId'})
    }
  };
  Fridge.init({
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Fridge',
  });
  return Fridge;
};
