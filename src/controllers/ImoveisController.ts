import { Request, response, Response } from "express";
import { getRepository } from "typeorm";
import Imovel from "../models/Imovel";

export default {
  async index(request: Request, response: Response) {
    const imoveisRepository = getRepository(Imovel);
    const imoveis = await imoveisRepository.find();

    return response.status(200).json(imoveis);
  },
  async show(request: Request, response: Response) {
    const { id } = request.params;
    const imoveisRepository = getRepository(Imovel);
    const imoveis = await imoveisRepository.findOneOrFail(id);

    return response.json(imoveis);
  },
  async create(request: Request, response: Response) {
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

    // const requestImages = request.files as Express.Multer.File[];
    // const images = requestImages.map((image) => {
    //   return { path: image.filename };
    // });

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
      // images
    });
    await imoveisRepository.save(imovel);

    return response.status(200).json(imovel);
  },
};
