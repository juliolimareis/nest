import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { DatabaseService } from 'src/core/database.service';
import { Student } from 'src/dtos/student.dto';

@Controller('student')
export class StudentController {
  constructor(private database: DatabaseService<Student>) {}

  @Get()
  getAll() {
    return this.database.fetchAll();
  }

  @Get(':id')
  get(@Param() param) {
    return this.database.fetch(param.id);
  }

  @Post()
  create(@Body() body: Student) {
    return this.database.create(body);
  }

  @Put(':id')
  update(@Param() params, @Body() body: Student) {
    return this.database.update(params.id, body);
  }

  @Delete(':id')
  delete(@Param() params) {
    return this.database.delete(params.id);
  }
}
