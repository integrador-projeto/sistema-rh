import {Body,Controller,Delete,Get,HttpCode,HttpStatus,Param,ParseIntPipe,Post,Put} from "@nestjs/common";
import { Funcionario } from "../entities/funcionario.entity";
import { FuncionarioService } from "../service/funcionario.service";

@Controller("/funcionarios")
export class FuncionarioController {

  constructor(
    private readonly funcionarioService: FuncionarioService
  ) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Funcionario[]> {
    return this.funcionarioService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(
    @Param('id', ParseIntPipe) id: number
  ): Promise<Funcionario> {
    return this.funcionarioService.findById(id);
  }

  @Get('colaborador/:colaborador')
  @HttpCode(HttpStatus.OK)
  findAllByColaborador(
    @Param('colaborador') colaborador: string
  ): Promise<Funcionario[]> {
    return this.funcionarioService.findAllByColaborador(colaborador);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(
    @Body() funcionario: Funcionario
  ): Promise<Funcionario> {
    return this.funcionarioService.create(funcionario);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(
    @Body() funcionario: Funcionario
  ): Promise<Funcionario> {
    return this.funcionarioService.update(funcionario);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(
    @Param('id', ParseIntPipe) id: number
  ) {
    return this.funcionarioService.delete(id);
  }
}