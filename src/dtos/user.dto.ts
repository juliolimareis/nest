import { Type } from 'class-transformer';
import { IsNotEmpty, IsDate } from 'class-validator';

export class User {
  id: number;

  @IsNotEmpty()
  name: string;

  @IsDate()
  @Type(() => Date)
  birthday?: Date;

  createdAt: Date;
}
