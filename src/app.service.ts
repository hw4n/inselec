import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from './users/users.service';
import { CreateUserDto } from './users/dto/create-user.dto';

@Injectable()
export class AppService {
  constructor(private UsersService: UsersService) {}

  loginWithIdPassword(loginDto: {
    id: string;
    password: string;
  }): CreateUserDto {
    const userToLogin = this.UsersService.findOne(loginDto.id);
    if (!userToLogin) {
      throw new NotFoundException();
    }
    if (userToLogin.password !== loginDto.password) {
      throw new UnauthorizedException();
    }

    return userToLogin;
  }
}
