import { Router } from 'express';
import authMiddlewares from './base/middlewares/auth';
import UserController from './app/controllers/userController';
import FileController from './app/controllers/fileController';
import SessionController from './app/controllers/sessionController';
import UsersGroupsController from './app/controllers/usersGroupsController';
import InvestGroupsController from './app/controllers/investGroupsController';
import PaymentsController from './app/controllers/paymentsController';
import ReturnsController from './app/controllers/returnsController';

const routes = new Router();
// Autentication
routes.use(authMiddlewares);
// routes
routes.use(UserController);
routes.use(FileController);
routes.use(SessionController);
routes.use(UsersGroupsController);
routes.use(InvestGroupsController);
routes.use(PaymentsController);
routes.use(ReturnsController);

export default routes;
