import { Injectable } from '@nestjs/common';
import {
  ClientProxyFactory,
  Transport,
  ClientProxy,
} from '@nestjs/microservices';

@Injectable()
export class AppService {
  private blogClient: ClientProxy;
  private userClient: ClientProxy;

  constructor() {
    this.blogClient = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: 'blog',
        port: 4000,
      },
    });
    this.userClient = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: 'user',
        port: 4001,
      },
    });
  }

  public getHello(): Promise<string> {
    return this.blogClient.send<string, string>('getHello', 'Michael').toPromise();
  }

  public findUser(): Promise<any> {
    return this.userClient.send<string, string>('find', '').toPromise();
  }
}
