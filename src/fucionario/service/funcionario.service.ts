import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Funcionario } from "../entities/funcionario.entity";

@Injectable()
export class FuncionarioService {

  constructor(
    @InjectRepository(Funcionario)
    private funcionarioRepository: Repository<Funcionario>
  ) {}

  async findAll(): Promise<Funcionario[]> {
    return await this.funcionarioRepository.find();
  }

  async findById(id: number): Promise<Funcionario> {

    const funcionario = await this.funcionarioRepository.findOne({
      where: { id }
    });

    if (!funcionario)
      throw new HttpException(
        'Funcionário não encontrado!',
        HttpStatus.NOT_FOUND
      );

    return funcionario;
  }

  async findAllByColaborador(colaborador: string): Promise<Funcionario[]> {
    return await this.funcionarioRepository.find({
      where: {
        colaborador: ILike(`%${colaborador}%`)
      }
    });
  }

  async create(funcionario: Funcionario): Promise<Funcionario> {
    return await this.funcionarioRepository.save(funcionario);
  }

  async update(funcionario: Funcionario): Promise<Funcionario> {

    await this.findById(funcionario.id);

    return await this.funcionarioRepository.save(funcionario);
  }

  async delete(id: number): Promise<DeleteResult> {

    await this.findById(id);

    return await this.funcionarioRepository.delete(id);
  }
}