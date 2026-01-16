import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Funcionario } from './entities/funcionario.entity';
import { FuncionarioController } from './controller/funcionario.controller';
import { FuncionarioService } from './service/funcionario.service';

@Module({
  imports: [TypeOrmModule.forFeature([Funcionario])],
  controllers: [FuncionarioController],
  providers: [FuncionarioService
  ],
  exports: [TypeOrmModule],
})
export class FuncionarioModule {}
