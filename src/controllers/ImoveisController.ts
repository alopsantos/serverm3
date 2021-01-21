import { Request, Response } from "express";
import { getRepository } from "typeorm";
import imovelView from "../views/imoveis_views";
import Imovel from "../models/Imovel";

export default {
  async index(request: Request, response: Response) {
    const imoveisRepository = getRepository(Imovel);
    const imoveis = await imoveisRepository.find({
      relations: ["images"],
    });

    return response.status(200).json(imovelView.renderMany(imoveis));
  },
  async show(request: Request, response: Response) {
    const { id } = request.params;
    const imoveisRepository = getRepository(Imovel);
    const imoveis = await imoveisRepository.findOneOrFail(id, {
      relations: ["images"],
    });

    return response.json(imovelView.render(imoveis));
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
