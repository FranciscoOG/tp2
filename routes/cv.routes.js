import Router from 'express';
import {
  getcv,
  create,
  update,
} from '../controllers/cv.controller.js';
import { authRequired } from '../utils/jwt.js';

//--ROUTES--//
const cvRoutes = Router();

// http://localhost:3000/api/todo/getAll
cvRoutes.get('/getAll', getcv);
cvRoutes.post('/create', create);
cvRoutes.put('/update/:idUpdate',authRequired, update);
//authRequired

export { cvRoutes };
