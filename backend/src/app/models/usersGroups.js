import Sequelize, { Model } from 'sequelize';

class UserGroups extends Model {
  static init(sequelize) {
    super.init(
      {
        id_group: Sequelize.STRING,
        id_user: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default UserGroups;
