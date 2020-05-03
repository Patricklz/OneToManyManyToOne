import InvestGroup from '../models/investGroup';
import User from '../models/user';

class InvestGroupService {
  async index(req, res, next) {
    const list = await InvestGroup.findAll({
      include: [
        {
          model: User,
          as: 'users',
          attributes: ['id', 'name', 'email'],
        },
      ],
    });
    res.json(list);
    next();
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const model = await InvestGroup.findByPk(id);
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
      const InvestGroupExists = await InvestGroup.findOne({
        where: { name: body.name },
      });
      if (InvestGroupExists) {
        throw new Error('Grupo de investimento já existe');
      }
    } catch (ex) {
      res.status(400).json(ex.message);
    }
    const model = await InvestGroup.create(body);
    res.json(model);
  }
}

export default new InvestGroupService();
