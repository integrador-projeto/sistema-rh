import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Funcionario } from './entities/fucionario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Funcionario])],
  controllers: [],
  providers: [],
  exports: [TypeOrmModule],
})
export class FuncionarioModule {}
