import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { City } from './city.schema';

@Injectable()
export class WeatherService {
  constructor(@InjectModel('City') private readonly cityModel: Model<City>) {}

  async getAllCitiesWeather() {
    const cities = await this.cityModel.find().exec();
    const apiKey = '33711ae1f14490268b375855fc1f5eb9';
    const weatherPromises = cities.map(async (city) => {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${apiKey}`,
      );
      return { city: city.name, weather: response.data.weather[0].description };
    });

    return Promise.all(weatherPromises);
  }
}
