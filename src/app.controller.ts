import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from "./auth/local-auth.guard";

@Controller('api/auth')
export class AppController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Request() req) {
    return this.authService.register(req.body);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return req.user;
  }
}