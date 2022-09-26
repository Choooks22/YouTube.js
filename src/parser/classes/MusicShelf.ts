import { Parser } from '../index.ts';
import { Text } from './misc/Text.ts';
import { NavigationEndpoint } from './NavigationEndpoint.ts';
import { MusicResponsiveListItem } from './MusicResponsiveListItem.ts';

import { YTNode } from '../helpers.ts';
import { Button } from './Button.ts';

export class MusicShelf extends YTNode {
  static type = 'MusicShelf';

  title: Text;
  contents;
  endpoint: NavigationEndpoint | null;
  continuation: string | null;
  bottom_text: Text | null;
  bottom_button?: Button | null;
  subheaders?: Array<any>;

  constructor(data: any) {
    super();

    this.title = new Text(data.title);
    this.contents = Parser.parseArray<MusicResponsiveListItem>(
      data.contents,
      MusicResponsiveListItem,
    );
    this.endpoint = Reflect.has(data, 'bottomEndpoint')
      ? new NavigationEndpoint(data.bottomEndpoint)
      : null;
    this.continuation =
      data.continuations?.[0].nextContinuationData?.continuation ||
      data.continuations?.[0].reloadContinuationData?.continuation || null;
    this.bottom_text = Reflect.has(data, 'bottomText')
      ? new Text(data.bottomText)
      : null;
    this.bottom_button = Parser.parseItem(data.bottomButton, Button);
    if (data.subheaders) {
      this.subheaders = Parser.parseArray(data.subheaders);
    }
  }
}
