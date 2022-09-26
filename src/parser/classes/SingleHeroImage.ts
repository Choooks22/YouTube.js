import { Thumbnail } from '../misc/Thumbnail.ts';
import { YTNode } from '../helpers.ts';

export class SingleHeroImage extends YTNode {
  static type = 'SingleHeroImage';

  thumbnails: Thumbnail[];
  style: string;

  constructor(data: any) {
    super();
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.style = data.style;
  }
}
