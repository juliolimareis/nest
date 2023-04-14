import { Music } from './music.dto';
import { DynamoService } from '../core/dynamo.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('music')
export class MusicController {
  constructor(private musicService: DynamoService) {}

  @Get()
  getAll() {
    return this.musicService.fetchAll();
  }

  @Get(':id')
  get(@Param() params) {
    return this.musicService.fetchById(params.id);
  }

  @Post()
  post(@Body() body: Music) {
    return this.musicService.dispatch(new Music(body) as any);
  }

  @Delete(':id')
  delete(@Param() params) {
    return this.musicService.delete(params.id);
  }
}
