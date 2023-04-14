import { AttributeValue } from '@aws-sdk/client-dynamodb';

export class SQL {
  id: number;
  createdAt: Date;
}

export abstract class CRUDRepository<T> {
  abstract fetchAll(): Promise<T[]>;
  abstract fetch(id: number): Promise<T>;
  abstract create(data: T): Promise<T>;
  abstract update(id: number, data: T): Promise<T>;
  abstract delete(id: number): Promise<void>;
}

export abstract class Dynamo {
  abstract id?: string;
  abstract toDynamo(): Record<string, AttributeValue>;
}
