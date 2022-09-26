import { YTNode } from '../helpers.ts';

export class MusicInlineBadge extends YTNode {
  static type = 'MusicInlineBadge';

  icon_type: string;
  label: string;

  constructor(data: any) {
    super();
    this.icon_type = data.icon.iconType;
    this.label = data.accessibilityData.accessibilityData.label;
  }
}
