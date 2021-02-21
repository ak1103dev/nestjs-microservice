import { Module } from '@nestjs/common';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { BlogsController } from './blogs/blogs.controller';

@Module({
  imports: [],
  controllers: [AppController, UsersController, BlogsController],
  providers: [
    AppService,
    {
      provide: 'USER_SERVICE',
      useFactory: () => {
        return ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            host: 'user',
            port: 4001,
          },
        });
      },
    },
    {
      provide: 'BLOG_SERVICE',
      useFactory: () => {
        return ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            host: 'blog',
            port: 4000,
          },
        });
      },
    },
  ],
})
export class AppModule {}
