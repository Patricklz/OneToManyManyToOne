import User from '../models/user';

class UserService {
  async index(req, res, next) {
    const list = await User.findAll();
    res.json(list);
    next();
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const model = await User.findByPk(id);
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
      const userExists = await User.findOne({
        where: { email: body.email },
      });
      if (userExists) {
        throw new Error('Email já existe');
      }
    } catch (ex) {
      res.status(400).json(ex.message);
    }
    const model = await User.create(body);
    res.json(model);
  }

  async update(req, res) {
    const { body } = req;
    try {
      const user = await User.findByPk(req.userId);
      const { email, oldPassword } = req.body;

      if (user.email !== email) {
        const userExists = await User.findOne({ where: { email } });
        if (userExists) {
          throw new Error('Email já existe');
        }
      }
      if (oldPassword && !(await user.checkPassword(oldPassword))) {
        throw new Error('Senha invalida');
      }

      const { id } = req.params;
      const model = await User.findByPk(id);
      if (!model) {
        throw new Error('registro não encontrado');
      }
      await model.update(body);
    } catch (ex) {
      res.status(400).json(ex.message);
    }
    res.json(body);
  }
}

export default new UserService();
