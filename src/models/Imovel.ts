import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from "typeorm";

import Image from "./Image";

@Entity("imoveis")
export default class Imovel {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  code: string;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  image: string;
  @Column()
  dormitorios: string;
  @Column()
  banheiros: string;
  @Column()
  garagem: string;
  @Column()
  sala: string;
  @Column()
  cozinha: string;
  @Column()
  suite: string;

  @OneToMany(() => Image, (image:Image) => image.imovel)
  @JoinColumn({ name: "imovel_id" })
  images: Image[];
}
