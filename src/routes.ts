import { Router } from "express";
import multer from "multer";

import uploadConfig from "./config/upload";
import ImoveisController from "./controllers/ImoveisController";

const routes = Router();
const upload = multer(uploadConfig);

routes.get("/imoveis", ImoveisController.index);
routes.get("/imovel/:id", ImoveisController.show);
// routes.post("/imoveis", upload.single('images'), ImoveisController.create);
routes.post("/imoveis", ImoveisController.create);

export default routes;
