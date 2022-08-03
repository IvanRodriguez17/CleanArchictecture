import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './cat.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h1>Hello World!</h1>';
  }

  postHello(createCatDto: CreateCatDto): string {
    return 'This a new cat with ' + createCatDto.age + ' years';
  }
}
      