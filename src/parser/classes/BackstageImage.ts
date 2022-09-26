import Thumbnail from './misc/Thumbnail.ts';
import { YTNode } from '../helpers.ts';

class BackstageImage extends YTNode {
  static type = 'BackstageImage';

  image: Thumbnail[];

  constructor(data: any) {
    super();
    this.image = Thumbnail.fromResponse(data.image);
  }
}

export default BackstageImage;
