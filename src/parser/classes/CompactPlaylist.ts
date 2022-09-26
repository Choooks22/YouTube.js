import { Playlist } from './Playlist.ts';

export class CompactPlaylist extends Playlist {
  static type = 'CompactPlaylist';

  constructor(data: any) {
    super(data);
  }
}
