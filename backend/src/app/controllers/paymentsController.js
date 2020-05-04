import { Router } from 'express';

import PayamentsService from '../service/paymentsService';

const routes = new Router();

routes.get('/public/payaments', PayamentsService.index);
routes.get('/public/payaments/:id', PayamentsService.show);
routes.post('/public/payaments', PayamentsService.store);

export default routes;
