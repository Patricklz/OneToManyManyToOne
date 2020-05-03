import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import { secret } from '../../config/auth';

export default async (req, res, next) => {
  try {
    if (!req.url.includes('public/')) {
      const { authorization } = req.headers;
      if (!authorization) {
        throw new Error('Usuario não autorizado');
      }
      const [, token] = authorization.split(' ');
      if (!token) {
        throw new Error('Usuario não autorizado');
      }
      const { id, email } = await promisify(jwt.verify)(token, secret);
      req.userId = id;
      req.userEmail = email;
    }
  } catch (ex) {
    res.status(400).json(ex.message);
  }
  next();
};
