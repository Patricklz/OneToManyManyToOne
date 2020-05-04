import Payments from '../models/payments';
import User from '../models/user';
import InvestGroup from '../models/investGroup';

class PaymentsService {
  async index(req, res) {
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
    res.json(list);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const model = await Payments.findByPk(id);
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
      await Payments.findOne({
        where: { id_group: body.id_group },
      });
    } catch (ex) {
      res.status(400).json(ex.message);
    }
    const model = await Payments.create(body);
    res.json(model);
  }
}

export default new PaymentsService();
