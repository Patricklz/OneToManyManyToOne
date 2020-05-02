import { Router } from 'express';

import PayamentsService from '../service/paymentsService';

const routes = new Router();

routes.get('/public/payaments', PayamentsService.index);
routes.post('/public/payaments', PayamentsService.store);

export default routes;
