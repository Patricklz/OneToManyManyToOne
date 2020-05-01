import { Router } from 'express';

import UsersGroupsService from '../service/usersGroupsService';

const routes = new Router();

routes.get('/public/usersGroups', UsersGroupsService.index);

export default routes;
