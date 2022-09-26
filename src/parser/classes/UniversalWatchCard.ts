import { Parser } from '../index.ts';
import { YTNode } from '../helpers.ts';

export class UniversalWatchCard extends YTNode {
  static type = 'UniversalWatchCard';

  header;
  call_to_action;
  sections;

  constructor(data: any) {
    super();
    // TODO: use parseItem / parseArray for these
    this.header = Parser.parse(data.header);
    this.call_to_action = Parser.parse(data.callToAction);
    this.sections = Parser.parse(data.sections);
  }
}
