import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', 
      port: 5432, 
      username: 'your_username', //add your database name here and also replace other fields with you required fields
      password: 'your_password', 
      database: 'your_database_name', 
      entities: ['/../**/**/entities/*{.ts,.js}'],
      migrations: ['dist/migrations/*{.ts,.js}'],
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {
  constructor(connection: Connection) {
    if (connection) {
      console.log('Connected to db');
    }
  }
}


