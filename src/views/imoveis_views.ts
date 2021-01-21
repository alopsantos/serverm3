import Imovel from "../models/Imovel";
import images_view from "../views/images_view";
//import ImageView from "../views/images_view";

export default {
  render(imovel: Imovel) {
    return {
      id: imovel.id,
      code: imovel.code,
      title: imovel.title,
      //description: imovel.description,
      image: imovel.image,
      dormitorios: imovel.dormitorios,
      banheiros: imovel.banheiros,
      garagem: imovel.garagem,
      sala: imovel.sala,
      cozinha: imovel.cozinha,
      suite: imovel.suite,
      //images: images_view.render(imovel.images),
    };
  },

  renderMany(imoveis: Imovel[]) {
    return imoveis.map((imovel) => this.render(imovel));
  },
};
