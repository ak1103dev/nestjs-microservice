import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface'

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('find')
  find(): User[] {
    return this.userService.find();
  }
}
