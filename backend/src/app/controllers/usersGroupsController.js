import { Router } from 'express';

import UsersGroupsService from '../service/usersGroupsService';

const routes = new Router();

routes.get('/public/usersGroups', UsersGroupsService.index);
routes.post('/public/usersGroups', UsersGroupsService.store);

export default routes;
