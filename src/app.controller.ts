import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './users/dto/create-user.dto';

@Controller('login')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  login(@Body() loginDto: { id: string; password: string }): CreateUserDto {
    return this.appService.loginWithIdPassword(loginDto);
  }
}
