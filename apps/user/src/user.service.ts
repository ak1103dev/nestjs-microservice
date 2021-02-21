import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface'

@Injectable()
export class UserService {
  find(): User[] {
    return [{
      email: 'test@yopmail.com',
    }, {
      email: 'test1@yopmail.com',
    }]
  }
}
