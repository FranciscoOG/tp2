import Router from 'express';
import { login, register } from '../controllers/user.controller.js';

//--ROUTES--//
const usersRoutes = Router();

// http://localhost:3000/api/user/login
usersRoutes.post('/login', login);
usersRoutes.post('/register', register);

export { usersRoutes };
