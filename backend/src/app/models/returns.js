import Sequelize, { Model } from 'sequelize';

class Returns extends Model {
  static init(sequelize) {
    super.init(
      {
        id_payments: Sequelize.INTEGER,
        returnValue: Sequelize.INTEGER,
        returnDate: Sequelize.DATE,
      },
      {
        sequelize,
        tableName: 'returns',
        timestamps: false,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Payments, {
      foreignKey: 'id_payments',
      as: 'payments',
    });
  }
}

export default Returns;
