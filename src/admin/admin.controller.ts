import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { JwtAuthGuard } from '../auth/jwt-auth/jwt-auth.guard';

@Controller('admin')
@UseGuards(JwtAuthGuard)
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('add-city')
  async addCity(@Body('name') cityName: string) {
    return this.adminService.addCity(cityName);
  }
}
