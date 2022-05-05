import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, PrimaryColumn, Double } from 'typeorm';

@Entity('fiis')
export default class Fiis{

    @PrimaryColumn()
    codigo: string;
  
    @Column()
    setor: string;
  
    @Column()
    preco_atual: number;
  
    @Column()
    liquidez_diaria: number;

    @Column()
    dividendo: number;

    @Column()
    dividend_yield: number;

    @Column()
    variacao_preco: number;

    @Column()
    rentabilidade_periodo: number;

    @Column()
    rentabilidade_acumulada: number;

    @Column()
    patrimonio_liquido: number;

    @Column()
    vpa: number;

    @Column()
    p_vpa: number;

    @Column()
    dy_patrimonial: number;

    @Column()
    variacao_patrimonial: number;

    @Column()
    vacancia_fisica: number;

    @Column()
    vacancia_financeira: number;

    @Column()
    quantidade_de_ativos: number;







}