import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImoveil1611100030942 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'imoveis',
            columns:[
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'code',
                    type: 'varchar'
                },
                {
                    name: 'title',
                    type: 'text'
                },
                {
                    name: 'description',
                    type: 'text'
                },
                {
                    name: 'image',
                    type: 'varchar'
                },
                {
                    name: 'dormitorios',
                    type: 'varchar'
                },
                {
                    name: 'banheiros',
                    type: 'varchar'
                },
                {
                    name: 'garagem',
                    type: 'varchar'
                },
                {
                    name: 'sala',
                    type: 'varchar'
                },
                {
                    name: 'cozinha',
                    type: 'varchar'
                },
                {
                    name: 'suite',
                    type: 'varchar'
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('imoveis');
    }

}
