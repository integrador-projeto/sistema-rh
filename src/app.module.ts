import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Funcionario } from './fucionario/entities/funcionario.entity';
import { FuncionarioModule } from './fucionario/funcionario.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_funcionario',
      entities: [Funcionario],
      synchronize: true,

    }),
    FuncionarioModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
