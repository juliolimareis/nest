import { Module } from '@nestjs/common';
import { DynamoService } from '../core/dynamo.service';
import { MusicController } from './music.controller';

@Module({
  controllers: [MusicController],
  providers: [
    {
      useFactory: () => new DynamoService('music'),
      provide: DynamoService,
    },
  ],
})
export class MusicModule {}
