import { Controller, Request, Post, UseGuards } from '@nestjs/common';
// import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';

@Controller('api/auth')
export class AppController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Request() req) {
    console.log('req');
    console.log(req.body);
    return this.authService.register(req.body);
  }

  // @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}