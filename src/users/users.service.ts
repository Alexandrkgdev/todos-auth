import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

// This should be a real class/interface representing a user entity
// export type UserType = any;

@Injectable()
export class UsersService {
  // constructor(
  //   @InjectModel(User)
  //   private userModel: typeof User,
  // ) {}
  //
  // private readonly users = [
  //   {
  //     userId: 1,
  //     username: 'john',
  //     password: 'changeme',
  //   },
  //   {
  //     userId: 2,
  //     username: 'maria',
  //     password: 'guess',
  //   },
  // ];
  //
  // async findOne(username: string): Promise<any | undefined> {
  //   return this.users.find((user) => user.username === username);
  // }
  //
  // async findAll(): Promise<User[]> {
  //   return this.userModel.findAll();
  // }
  //
  // // findOne(id: string): Promise<User> {
  // //   return this.userModel.findOne({
  // //     where: {
  // //       id,
  // //     },
  // //   });
  // // }
  //
  // async remove(id: string): Promise<void> {
  //   const user = await this.findOne(id);
  //   await user.destroy();
  // }


  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async create(user): Promise<User> {
    return this.userModel.create(user);
  }

  findOne(id: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}