import jwt from 'jsonwebtoken';
import { secret, expiresIn } from '../../config/auth';
import User from '../models/user';

const getUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw new Error('Usuario não encontrado');
    }
    if (!(await user.checkPassword(password))) {
      throw new Error('A senha está incorreta');
    }
    return user;
  } catch (ex) {
    return res.status(400).json(ex.message);
  }
};

class SessionService {
  async store(req, res, next) {
    const { id, name, email } = await getUser(req, res, next);
    const user = { id, name, email };
    res.json({
      user,
      token: jwt.sign(user, secret, { expiresIn }),
    });
  }
}

export default new SessionService();
