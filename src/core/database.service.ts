import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma.service';
import { CRUDRepository, SQL } from 'src/dtos/abstract';

@Injectable()
export class DatabaseService<T extends SQL> implements CRUDRepository<T> {
  constructor(private prisma: PrismaService, private tableName: string) {}

  update(id: number, data: T): Promise<T> {
    return this.prisma[this.tableName].update({
      data,
      where: {
        id: Number(id),
      },
    });
  }

  async delete(id: number): Promise<void> {
    await this.prisma[this.tableName].delete({
      where: {
        id: Number(id),
      },
    });
  }

  fetch(id: number): Promise<T> {
    return this.prisma[this.tableName].findUnique({
      where: {
        id: Number(id),
      },
    });
  }

  create(data: T): Promise<T> {
    return this.prisma[this.tableName].create({ data });
  }

  fetchAll(): Promise<T[]> {
    return this.prisma[this.tableName].findMany();
  }
}
