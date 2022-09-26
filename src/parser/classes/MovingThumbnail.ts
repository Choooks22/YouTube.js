import { Thumbnail } from './misc/Thumbnail.ts';
import { YTNode } from '../helpers.ts';

export class MovingThumbnail extends YTNode {
  static type = 'MovingThumbnail';

  constructor(data: any) {
    super();
    return data.movingThumbnailDetails?.thumbnails.map((thumbnail: any) =>
      new Thumbnail(thumbnail)
    ).sort((a: any, b: any) => b.width - a.width);
  }
}
