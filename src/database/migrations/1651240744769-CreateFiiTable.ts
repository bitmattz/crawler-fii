import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateFiiTable1651240744769 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'fiis',
                columns:[
                    {
                        name: 'codigo',
                        type: 'varchar',
                        isPrimary: true,
                      },
                      {
                        name: 'setor',
                        type: 'varchar',
                      },
                      {
                        name: 'preco_atual',
                        type: 'float',
                      },
                      {
                        name: 'liquidez_diaria',
                        type: 'float',
                      },
                      {
                        name: 'dividendo',
                        type: 'float',
                      },
                      {
                        name: 'dividend_yield',
                        type: 'float',
                      },
                      {
                        name: 'variacao_preco',
                        type: 'float',
                      },
                      {
                        name: 'rentabilidade_periodo',
                        type: 'float',
                      },
                      {
                        name: 'rentabilidade_acumulada',
                        type: 'float',
                      },
                      {
                        name: 'patrimonio_liquido',
                        type: 'varchar',
                      },
                      {
                        name: 'vpa',
                        type: 'float',
                      },
                      {
                        name: 'p_vpa',
                        type: 'float',
                      },
                      {
                        name: 'dy_patrimonial',
                        type: 'float',
                      },
                      {
                        name: 'variacao_patrimonial',
                        type: 'float',
                      },
                      {
                        name: 'vacancia_fisica',
                        type: 'float',
                      },
                      {
                        name: 'vacancia_financeira',
                        type: 'float',
                      },
                      {
                        name: 'quantidade_de_ativos',
                        type: 'int',
                      },
                ]
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('fiis');
    }

}
