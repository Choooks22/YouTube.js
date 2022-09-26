import { Text } from '../misc/Text.ts';
import { YTNode } from '../helpers.ts';

export class ThumbnailOverlayEndorsement extends YTNode {
  static type = 'ThumbnailOverlayEndorsement';

  text: string;

  constructor(data: any) {
    super();
    this.text = new Text(data.text).toString();
  }
}
