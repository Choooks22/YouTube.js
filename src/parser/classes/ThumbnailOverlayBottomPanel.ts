import { YTNode } from '../helpers.ts';

export class ThumbnailOverlayBottomPanel extends YTNode {
  static type = 'ThumbnailOverlayBottomPanel';

  icon_type: string;

  constructor(data: any) {
    super();
    this.icon_type = data.icon.iconType;
  }
}
