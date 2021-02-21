import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';

@Controller('blogs')
@ApiTags('blogs')
export class BlogsController {
  constructor(@Inject('BLOG_SERVICE') private readonly blogClient: ClientProxy) {}

  @Get()
  async getHello(): Promise<string> {
    return this.blogClient.send<string, string>('getHello', 'Jame Bond').toPromise();
  }
}
