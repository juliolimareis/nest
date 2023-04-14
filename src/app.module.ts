import { MusicModule } from './music/music.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './core/prisma.service';
import { StudentModule } from './student/student.module';

@Module({
  imports: [MusicModule, StudentModule],
  controllers: [AppController],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
