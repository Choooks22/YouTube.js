import { Text } from '../misc/Text.ts';
import { YTNode } from '../helpers.ts';

export class ThumbnailOverlayTimeStatus extends YTNode {
  static type = 'ThumbnailOverlayTimeStatus';

  text: string;

  constructor(data: any) {
    super();
    this.text = new Text(data.text).toString();
  }
}
