import { Injectable } from '@nestjs/common';
import * as bcrypt from "bcrypt"
import { JwtService } from '@nestjs/jwt';
import { HttpException } from "@nestjs/common"
import { ConfigService } from '../config/config.service';
import { authModel } from './auth.entity';
import { LOADIPHLPAPI } from 'dns';


export interface User {
  _id: number;
  age: number;
  username: string;
  password: string;
  firstName: string;
  roleId: number
}

@Injectable()
export class AuthService {

  constructor(config: ConfigService, public jwtService: JwtService) {
  }

  public async validateUser(email: string, password: string): Promise<any> {
    const user: any = await authModel.findOne({ email: email })

    if (!user) {
      throw new HttpException('User not found', 404);
    }
    const matchPasswords = await bcrypt.compare(password, user.password);
    if (user && matchPasswords) {
      return user;
    } else throw new HttpException('Email or password incorrect', 400);;
  }

  public async login(body: any) {
    const user: any = await authModel.findOne({ email: body.username })
    const payload = {
      email: user.email,
      firstName: user.firstName,
      age: user.age,
      _id: user._id
    };
    return new HttpException(this.jwtService.sign(payload), 200)
  }
}