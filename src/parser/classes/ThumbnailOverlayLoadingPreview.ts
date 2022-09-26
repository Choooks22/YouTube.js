import { Text } from './misc/Text.ts';
import { YTNode } from '../helpers.ts';

export class ThumbnailOverlayLoadingPreview extends YTNode {
  static type = 'ThumbnailOverlayLoadingPreview';

  text: Text;

  constructor(data: any) {
    super();
    this.text = new Text(data.text);
  }
}
