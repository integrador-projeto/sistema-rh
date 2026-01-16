import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_funcionario' })
export class Funcionario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 120 })
  colaborador: string;

  @Column({ length: 100 })
  departamento: string;

  @Column({ length: 30 })
  matricula: string;

  @Column({ type: 'date' })
  dataAdmissao: Date;
}
