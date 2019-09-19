import { Module } from '@nestjs/common';
import { DatabaseModule } from './db.connection/db-module';

import { ContentController } from './content/content.controller';
import { ContentService } from './content/content.service';
import { todoProviders } from './content/content.providers';

import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { usersProviders, rolesProviders , usersrolesProviders} from './users/users.providers';

import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { authProviders } from './auth/auth.providers';
import { LocalStrategy } from './auth/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth/constants';
import { JwtStrategy } from './users/jwt.strategy';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '2h' },
    }),],
  controllers: [ContentController, UsersController, AuthController],
  providers: [
    LocalStrategy,
    JwtStrategy,
    ContentService,
    ...todoProviders,
    UsersService,
    ...usersProviders,
    AuthService,
    ...authProviders,
    ...rolesProviders,
    ...usersrolesProviders
  ]
}
)
export class AppModule { }
