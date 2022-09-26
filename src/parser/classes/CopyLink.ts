import { Parser } from '../index.ts';
import { Button } from './Button.ts';
import { YTNode } from '../helpers.ts';

export class CopyLink extends YTNode {
  static type = 'CopyLink';

  copy_button: Button | null;
  short_url: string;
  style: string;

  constructor(data: any) {
    super();
    this.copy_button = Parser.parseItem<Button>(data.copyButton, Button);
    this.short_url = data.shortUrl;
    this.style = data.style;
  }
}
