import { Controller, Get } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    const helloValue = await this.appService.getHello();
    return helloValue;
  }
}
