import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { FindOneUserDto } from './dto/find-one-user.dto';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User.name)
    private readonly userModel:Model<User>
  ){}

  async create(createUserDto: CreateUserDto) {

    try {
      const user = await this.userModel.create(createUserDto);
      return user;
    } catch (error) {
      console.log('Este es el error',error)
      throw new Error(`Error server ${error}`)
    }

  }

  async findOneWithCredentials(findOneUserDto:FindOneUserDto){
    console.log('entro y esto llego',findOneUserDto)
    try {
      const user = await this.userModel.findOne({username:findOneUserDto.username})
      console.log('este es el user',user)

      if(user == null){
        throw new Error(`User doesn't exist`)
      }

      if(user.password !== findOneUserDto.password) throw new Error(`Password incorrect`)
      return user
    } catch (error) {
      console.log('Este es el error',error)
      throw new Error(`Error server ${error}`)
    }
  }

  async findOneWithUsername(username:string){
    try {
      const user = await this.userModel.findOne({username})
      console.log('TIPO DE DATA DE USUARIO',typeof user.id)
      return user
    } catch (error) {
      console.log('Este es el error',error)
      throw new Error(`Error server ${error}`)
    }
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
