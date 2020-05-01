import Sequelize from 'sequelize';

import dataBaseConfig from '../config/database';

import User from '../app/models/user';
import File from '../app/models/file';
import UsersGroups from '../app/models/usersGroups';

const models = [User, File, UsersGroups];

class DataBase {
  constructor() {
    this.init();
  }

  init() {
    this.conection = new Sequelize(dataBaseConfig);
    models
      .map(model => model.init(this.conection))
      .map(model => model.associate && model.associate(this.conection.models));
  }
}

export default new DataBase();
