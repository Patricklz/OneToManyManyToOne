import Message from '../../base/util/message';
import Payments from '../models/payments';
import User from '../models/user';
import InvestGroup from '../models/investGroup';

class PaymentsService {
  async index(req, res, next) {
    const list = await Payments.findAll({
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
      const model = await Payments.findByPk(id);
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
      await Payments.findOne({
        where: { id_group: body.id_group },
      });
    } catch (ex) {
      res.status(400).json(new Message(null, ex.message));
    }
    const model = await PaymentsService.create(body);
    res.json(new Message(model));
  }
}

export default new PaymentsService();
