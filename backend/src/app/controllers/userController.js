import { Router } from 'express';

import UserService from '../service/userService';

const routes = new Router();

routes.get('/public/users', UserService.index);
routes.get('/users/:id', UserService.show);
routes.post('/public/users', UserService.store);
routes.put('/users/:id', UserService.update);
export default routes;
