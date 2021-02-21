import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { BlogsController } from './blogs/blogs.controller';

@Module({
  imports: [],
  controllers: [AppController, UsersController, BlogsController],
  providers: [AppService],
})
export class AppModule {}
