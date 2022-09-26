import { Playlist } from './Playlist.ts';

export class Mix extends Playlist {
  static type = 'Mix';

  constructor(data: any) {
    super(data);
  }
}
