import { Router } from 'express';

import SessionService from '../service/sessionService';

const routes = new Router();

routes.post('/public/sessions', SessionService.store);

export default routes;
