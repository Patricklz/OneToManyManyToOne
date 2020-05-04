import { Model } from 'sequelize';

class UsersGroups extends Model {
  static init(sequelize) {
    super.init(
      {},
      {
        sequelize,
        tableName: 'users_groups',
        timestamps: false,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    // eslint-disable-next-line prettier/prettier
    this.belongsTo(models.investment_groups, { foreignKey: 'group_id', as: 'group' });
  }
}

export default UsersGroups;
