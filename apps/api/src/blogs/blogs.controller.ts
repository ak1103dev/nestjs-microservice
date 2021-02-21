import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from '../app.service';

@Controller('blogs')
@ApiTags('blogs')
export class BlogsController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    const helloValue = await this.appService.getHello();
    return helloValue;
  }
}
