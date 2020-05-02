import Message from '../../base/util/message';
import InvestGroup from '../models/investGroup';

class InvestGroupService {
  async index(req, res, next) {
    const list = await InvestGroup.findAll();
    res.json(new Message(list));
    next();
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const model = await InvestGroup.findByPk(id);
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
      const InvestGroupExists = await InvestGroup.findOne({
        where: { name: body.name },
      });
      if (InvestGroupExists) {
        throw new Error('Grupo de investimento já existe');
      }
    } catch (ex) {
      res.status(400).json(new Message(null, ex.message));
    }
    const model = await InvestGroup.create(body);
    res.json(new Message(model));
  }
}

export default new InvestGroupService();
