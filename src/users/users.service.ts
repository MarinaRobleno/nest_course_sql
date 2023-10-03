import { Injectable } from '@nestjs/common';
import { User } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: string): Promise<User> {
    return this.usersRepository.findOne({ where: { id } });
  }

  async create(user: User): Promise<User> {
    const newUser = await this.usersRepository.create(user);
    return this.usersRepository.save(newUser);
  }

  async update(id: string, user: User): Promise<User> {
    const updateUser = await this.usersRepository.preload({
      id: id,
      email: user.email,
      password: user.password,
    });
    return this.usersRepository.save(updateUser);
  }

  async delete(id: string): Promise<{ deleted: Boolean }> {
    const user = await this.usersRepository.findOne({ where: { id } });
    this.usersRepository.remove(user);

    return { deleted: true };
  }
}
