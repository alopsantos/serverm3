import express from "express";
import { getRepository } from "typeorm";
import Imovel from "./models/Imovel";

import "./database/connection";

const app = express();

app.use(express.json());

app.post("/imoveis", async (request, response) => {

    const {
      code,
      title,
      description,
      image,
      dormitorios,
      banheiros,
      garagem,
      sala,
      cozinha,
      suite,
    } = request.body;

    const imoveisRepository = getRepository(Imovel);

    const imovel = imoveisRepository.create({
      code,
      title,
      description,
      image,
      dormitorios,
      banheiros,
      garagem,
      sala,
      cozinha,
      suite,
    });
    await imoveisRepository.save(imovel);

  return response.status(200).json(imovel);
});

app.listen(5555);
