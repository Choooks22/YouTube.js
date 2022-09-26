import { Parser } from '../index.ts';
import { YTNode } from '../helpers.ts';

export class MetadataScreen extends YTNode {
  static type = 'MetadataScreen';

  section_list;

  constructor(data: any) {
    super();
    this.section_list = Parser.parseItem(data);
  }
}
