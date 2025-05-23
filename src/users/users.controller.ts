import {
    Controller,
    Get,
    Param,
    Delete,
    ParseIntPipe,
    UseGuards,
    Request,
  } from '@nestjs/common';
  import { UsersService } from './users.service';
  import { AuthGuard } from '@nestjs/passport';
  
  @UseGuards(AuthGuard('jwt'))
  @Controller('users')
  export class UsersController {
    constructor(private readonly usersService: UsersService) {}
  
    @Get()
    findAll(@Request() req) {
      return this.usersService.findAll(req.user.userId);
    }
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
      return this.usersService.findOne(id);
    }
  
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
      return this.usersService.remove(id);
    }
  }
  