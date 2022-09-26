import { Text } from '../misc/Text.ts';
import { YTNode } from '../helpers.ts';
import { NavigationEndpoint } from './NavigationEndpoint.ts';

export class IconLink extends YTNode {
  static type = 'IconLink';

  icon_type: string;
  tooltip?: string;
  endpoint: NavigationEndpoint;

  constructor(data: any) {
    super();

    this.icon_type = data.icon?.iconType;

    if (data.tooltip) {
      this.tooltip = new Text(data.tooltip).toString();
    }

    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
  }
}
