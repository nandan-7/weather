import { Controller, Get ,Body} from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  async getWeather() {
    return this.weatherService.getAllCitiesWeather();
  }
  
}
