import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tb_funcionario' })
export class Funcionario {

  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 120, nullable: false })
  colaborador: string;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  departamento: string;

  @IsNotEmpty()
  @Column({ length: 30, nullable: false })
  matricula: string;

  @IsNotEmpty()
  @Column({ type: 'date', nullable: false })
  dataAdmissao: Date;
}
