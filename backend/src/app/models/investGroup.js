import Sequelize, { Model } from 'sequelize';

class InvestGroup extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        term: Sequelize.STRING,
        goal: Sequelize.STRING,
        contribuition: Sequelize.VIRTUAL,
        due_date: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default InvestGroup;
