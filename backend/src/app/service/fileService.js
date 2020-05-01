import Message from '../../base/util/message';
import File from '../models/file';

class FileService {
  async index(req, res, next) {
    const list = await File.findAll();
    res.json(new Message(list));
    next();
  }

  async store(req, res) {
    try {
      const { originalname: name, filename: path } = req.file;
      const file = await File.create({
        name,
        path,
      });
      res.json(file);
    } catch (ex) {
      res.status(400).json(new Message(null, ex.message));
    }
  }
}

export default new FileService();
