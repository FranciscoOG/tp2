import Router from 'express';

import { cvRoutes } from './cv.routes.js';
import { usersRoutes } from './user.routes.js';

const api = Router();
api.use('/cv', cvRoutes);

api.use('/user', usersRoutes);

export { api };
