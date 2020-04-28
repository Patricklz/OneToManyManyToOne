import { Router } from 'express';
import authMiddlewares from './base/middlewares/auth';
import UserController from './app/controllers/userController';
import SessionController from './app/controllers/sessionController';

const routes = new Router();
// Autentication
routes.use(authMiddlewares);
// routes
routes.use(UserController);
routes.use(SessionController);

export default routes;
