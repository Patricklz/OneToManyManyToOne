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
    res.json(list);
    next();
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const model = await UsersGroups.findByPk(id);
      if (!model) {
        throw new Error('registro não encontrado');
      }
      res.json(model);
    } catch (ex) {
      res.status(400).json(ex.message);
    }
  }

  async store(req, res) {
    const { body } = req;
    try {
      await UsersGroups.findOne({
        where: { group_id: body.group_id },
      });
    } catch (ex) {
      res.status(400).json(ex.message);
    }
    const model = await UsersGroups.create(body);
    res.json(model);
  }
}

export default new UsersGroupsService();
