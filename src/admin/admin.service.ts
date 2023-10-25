import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { City } from '../weather/city.schema';

@Injectable()
export class AdminService {
  constructor(@InjectModel('City') private readonly cityModel: Model<City>) {}

  async addCity(name: string) {
    const city = new this.cityModel({ name });
    return city.save();
  }
}