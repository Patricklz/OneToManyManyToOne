import { Model } from 'sequelize';

class Payments extends Model {
  static init(sequelize) {
    super.init(
      {},
      {
        sequelize,
        tableName: 'payments',
        timestamps: false,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'id_user',
      as: 'user',
    });

    this.belongsTo(models.investment_groups, {
      foreignKey: 'id_group',
      as: 'group',
    });
  }
}

export default Payments;
