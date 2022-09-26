import { Playlist } from './Playlist.ts';

export class CompactMix extends Playlist {
  static type = 'CompactMix';

  constructor(data: any) {
    super(data);
  }
}
