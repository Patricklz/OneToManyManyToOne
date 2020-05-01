import Message from '../../base/util/message';
import UsersGroups from '../models/usersGroups';

class UsersGroupsService {
  async index(req, res, next) {
    const list = await UsersGroups.findAll();
    res.json(new Message(list));
    next();
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const model = await UsersGroups.findByPk(id);
      if (!model) {
        throw new Error('registro não encontrado');
      }
      res.json(new Message(model));
    } catch (ex) {
      res.status(400).json(new Message(null, ex.message));
    }
  }

  async store(req, res) {
    const { body } = req;
    console.log(body);
    try {
      await UsersGroups.findOne({
        where: { id_group: body.id_group },
      });
    } catch (ex) {
      res.status(400).json(new Message(null, ex.message));
    }
    const model = await UsersGroups.create(body);
    res.json(new Message(model));
  }
}

export default new UsersGroupsService();
