import { NavigationEndpoint } from './NavigationEndpoint.ts';
import { YTNode } from '../helpers.ts';

export class DownloadButton extends YTNode {
  static type = 'DownloadButton';

  style: string;
  size: string; // TODO: check this
  endpoint: NavigationEndpoint;
  target_id: string;

  constructor(data: any) {
    super();
    this.style = data.style;
    this.size = data.size;
    this.endpoint = new NavigationEndpoint(data.command);
    this.target_id = data.targetId;
  }
}
