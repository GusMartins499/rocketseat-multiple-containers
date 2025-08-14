import { DataSource } from 'typeorm';
import { Module } from '@nestjs/common';

const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'mysql',
        port: 3306,
        username: 'admin',
        password: 'd198c5a69e590d0336a9af21a67cb6cbad12667b0a7e943e7cf4de674f27845a',
        database: 'template-nestjs',
        entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
      });

      return dataSource.initialize().then(() => console.log('MySQL connected !'));
    },
  },
];

@Module({
  providers: [...databaseProviders],
})
export class DatabaseModule { }
