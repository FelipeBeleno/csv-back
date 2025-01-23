import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './entities/user.entity';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private readonly jwtService: JwtService
  ) { }

  async validateUser(email: string): Promise<User | null> {
    const user = await this.userModel.findOne({ email });
    return user;
  }

  async login(loginDto: LoginDto) {
    const userVerify = await this.userModel.findOne({ email: loginDto.email });

    if (!userVerify) {
      throw new UnauthorizedException('Credenciales invalidas');
  }

  const payload = {
      email: userVerify.email,
  };

  const token = await this.jwtService.signAsync(payload);

  return {
      ...payload,
      token,
  };
  }
}