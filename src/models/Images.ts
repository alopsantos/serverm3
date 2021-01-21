import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";

import Imovel from './Imovel'

@Entity("images")
export default class Image {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => Imovel, imovel => imovel.images, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({name: 'imovel_id'})
  imovel: Imovel
}
