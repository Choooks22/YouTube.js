import { Text } from '../misc/Text.ts';
import { NavigationEndpoint } from './NavigationEndpoint.ts';

import { YTNode } from '../helpers.ts';

export class Button extends YTNode {
  static type = 'Button';

  text: string;

  label;
  tooltip;
  icon_type;

  endpoint: NavigationEndpoint;

  constructor(data: any) {
    super();
    this.text = new Text(data.text).toString();

    if (data.accessibility?.label) {
      this.label = data.accessibility?.label;
    }

    if (data.tooltip) {
      this.tooltip = data.tooltip;
    }

    if (data.icon?.iconType) {
      this.icon_type = data.icon?.iconType;
    }

    this.endpoint = new NavigationEndpoint(
      data.navigationEndpoint || data.serviceEndpoint || data.command,
    );
  }
}
