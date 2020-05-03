import Returns from '../models/returns';
import Payments from '../models/payments';

class ReturnsService {
  async index(req, res, next) {
    const list = await Returns.findAll({
      include: [
        {
          model: Returns,
          as: 'returns',
          attributes: ['returnValue', 'returnDate'],
        },
        {
          model: Payments,
          as: 'payments',
        },
      ],
    });
    res.json(list);
    next();
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const model = await Returns.findByPk(id);
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
      await Returns.findOne({
        where: { id_payments: body.id_payments },
      });
    } catch (ex) {
      res.status(400).json(ex.message);
    }
    const model = await Returns.create(body);
    res.json(model);
  }
}

export default new ReturnsService();
