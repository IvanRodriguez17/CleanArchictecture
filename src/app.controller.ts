import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCatDto } from './cat.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("prueba")
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("prueba")
  postHello(@Body() createCatDto : CreateCatDto){
    return this.appService.postHello(createCatDto);
  }
}
