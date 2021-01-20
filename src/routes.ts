import { Router } from 'express';

import ImoveisController from './controllers/ImoveisController';

const routes = Router();


routes.get("/imoveis", ImoveisController.index);
routes.get("/imovel/:id", ImoveisController.show);
routes.post("/imoveis", ImoveisController.create);

export default routes;