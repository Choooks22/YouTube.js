import { Thumbnail } from '../misc/Thumbnail.ts';
import { YTNode } from '../helpers.ts';

export class MusicThumbnail extends YTNode {
  static type = 'MusicThumbnail';

  contents;

  constructor(data: any) {
    super();
    this.contents = Thumbnail.fromResponse(data.thumbnail);
  }
}
