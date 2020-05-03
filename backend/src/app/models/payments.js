import Sequelize, { Model } from 'sequelize';

class Payments extends Model {
  static init(sequelize) {
    super.init(
      {
        id_group: Sequelize.STRING,
        id_user: Sequelize.STRING,
        payday: Sequelize.STRING,
        verificationVoucher: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'payments',
        timestamps: false,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'id_user', as: 'user' });
    // eslint-disable-next-line prettier/prettier
    this.belongsTo(models.investment_groups, { foreignKey: 'id_group', as: 'group' });
  }
}

export default Payments;
