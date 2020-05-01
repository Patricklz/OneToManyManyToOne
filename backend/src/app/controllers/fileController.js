import { Router } from 'express';
import multer from 'multer';
import multerConfig from '../../config/multer';

import FileService from '../service/fileService';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/public/files', upload.single('file'), FileService.store);

export default routes;
