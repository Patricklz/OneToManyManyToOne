import Message from '../../base/util/message';
import UsersGroups from '../models/usersGroups';
import User from '../models/user';
import InvestGroup from '../models/investGroup';

class UsersGroupsService {
  async index(req, res, next) {
    const list = await UsersGroups.findAll({
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'name', 'email'],
        },
        {
          model: InvestGroup,
          as: 'group',
        },
      ],
    });
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
