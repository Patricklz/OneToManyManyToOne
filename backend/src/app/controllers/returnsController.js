import { Router } from 'express';

import ReturnsService from '../service/returnsService';

const routes = new Router();

routes.get('/public/payaments', ReturnsService.index);
routes.get('/public/payaments/:id', ReturnsService.show);
routes.post('/public/payaments', ReturnsService.store);

export default routes;
