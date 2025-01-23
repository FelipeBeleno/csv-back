import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import configuration from 'config/configuration';
import { User, UserSchema } from './entities/user.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({
      global: true,
      secret: configuration().secretConstant,
      signOptions: { expiresIn: '8h' }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule { }
