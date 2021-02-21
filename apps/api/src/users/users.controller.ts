import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(@Inject('USER_SERVICE') private readonly userClient: ClientProxy) {}

  @Get()
  async find(): Promise<any> {
    return this.userClient.send<string, string>('find', '').toPromise();
  }
}
