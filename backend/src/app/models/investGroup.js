import Sequelize, { Model } from 'sequelize';

class InvestGroup extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        term: Sequelize.INTEGER,
        goal: Sequelize.STRING,
        contribution: Sequelize.DOUBLE,
        expirationDay: Sequelize.INTEGER,
      },
      {
        sequelize,
        modelName: 'investment_groups',
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsToMany(models.User, {
      through: 'users_groups',
      as: 'users',
      foreignKey: 'user_id',
      otherKey: 'group_id',
      timestamps: false,
    });
  }
}

export default InvestGroup;
