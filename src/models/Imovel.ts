import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

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
}
