import { Test, TestingModule } from '@nestjs/testing';
import { MusicController } from './music.controller';
import { DynamoService } from '../core/dynamo.service';

describe('MusicController', () => {
  let controller: MusicController;

  beforeEach(async () => {
    controller = new MusicController(new DynamoService('music'));

    // const app: TestingModule = await Test.createTestingModule({
    //   controllers: [MusicController],
    //   providers: [MusicService],
    // }).compile();

    // controller = app.get<MusicController>(MusicController);
  });

  describe('root', () => {
    it('Get all musics', async () => {
      expect(await controller.getAll).toBe([]);
    });
  });
});
