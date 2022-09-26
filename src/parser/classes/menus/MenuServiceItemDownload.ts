import { NavigationEndpoint } from '../NavigationEndpoint.ts';
import { YTNode } from '../../helpers.ts';

export class MenuServiceItemDownload extends YTNode {
  static type = 'MenuServiceItemDownload';

  has_separator: boolean;
  endpoint: NavigationEndpoint;

  constructor(data: any) {
    super();
    this.has_separator = data.hasSeparator;
    this.endpoint = new NavigationEndpoint(
      data.navigationEndpoint || data.serviceEndpoint,
    );
  }
}
