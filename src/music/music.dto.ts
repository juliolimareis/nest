import { IsNotEmpty } from 'class-validator';
import { Dynamo } from 'src/dtos/abstract';

export class Music implements Dynamo {
  constructor(music?: Music) {
    this.id = music?.id;
    this.artist = music?.artist;
    this.name = music?.name;
  }

  id?: string;

  @IsNotEmpty()
  artist: string;
  @IsNotEmpty()
  name: string;

  toDynamo() {
    return {
      id: { S: this.id },
      artist: { S: this.artist },
      name: { S: this.name },
    };
  }
}
