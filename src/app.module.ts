import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import mongoConfig from './mongo.config';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { WeatherModule } from './weather/weather.module';

@Module({
  imports: [
    MongooseModule.forRoot(mongoConfig.uri),
    AuthModule,
    AdminModule,
    WeatherModule,
  ],
})
export class AppModule {}
