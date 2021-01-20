import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createImages1611158163016 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "images",
        columns: [
          {
            name: "id",
            type: "integer",
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
              name: 'path',
              type: "varchar"
          },
          {
              name: 'imovel_id',
              type: 'integer'
          }
        ],
        foreignKeys:[
            {
                name: 'ImageImovel',
                columnNames: ['imovel_id'],
                referencedTableName: 'imoveis',
                referencedColumnNames: ['id'],
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('images')
  }
}
