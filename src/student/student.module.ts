import { DatabaseService } from 'src/core/database.service';
import { PrismaService } from './../core/prisma.service';
import { StudentController } from './student.controller';
import { Module } from '@nestjs/common';
import { Student } from 'src/dtos/student.dto';

@Module({
  controllers: [StudentController],
  providers: [
    {
      useFactory: () =>
        new DatabaseService<Student>(new PrismaService(), 'student'),
      provide: DatabaseService,
    },
  ],
})
export class StudentModule {}
