import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';
import { City, CitySchema } from './city.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: City.name, schema: CitySchema }]),
  ],
  controllers: [WeatherController],
  providers: [WeatherService],
})
export class WeatherModule {}
