import { Router } from 'express';

import InvestGroupService from '../service/investGroupService';

const routes = new Router();

routes.get('/public/investGroup', InvestGroupService.index);
routes.get('/investGroup/:id', InvestGroupService.show);
routes.post('/public/investGroup/:id', InvestGroupService.store);

export default routes;
