import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 'alice123',
      password: 'password123',
      name: 'Alice Smith',
      email: 'alice.smith@example.com',
    },
    {
      id: 'bob456',
      password: 'qwerty456',
      name: 'Bob Johnson',
      email: 'bob.johnson@example.com',
    },
    {
      id: 'charlie789',
      password: 'letmein789',
      name: 'Charlie Davis',
      email: 'charlie.davis@example.com',
    },
  ];

  create(createUserDto: CreateUserDto) {
    if (this.users.find((user) => user.id === createUserDto.id)) {
      throw new ConflictException();
    }

    this.users.push({ ...createUserDto });
    return createUserDto;
  }

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }
}
