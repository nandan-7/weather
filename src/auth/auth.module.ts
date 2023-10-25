import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt/jwt.strategy';
import { JwtService } from './jwt/jwt.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'risky',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [JwtStrategy, JwtService],
  exports: [JwtModule],
})
export class AuthModule {}
