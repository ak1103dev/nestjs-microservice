import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from '../app.service';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async findUser(): Promise<any> {
    const users = await this.appService.findUser();
    return users;
  }
}
