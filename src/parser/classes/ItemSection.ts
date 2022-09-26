import { Parser } from '../index.ts';
import { ItemSectionHeader } from './ItemSectionHeader.ts';

import { YTNode } from '../helpers.ts';
import { ItemSectionTabbedHeader } from './ItemSectionTabbedHeader.ts';

export class ItemSection extends YTNode {
  static type = 'ItemSection';

  header: ItemSectionHeader | ItemSectionTabbedHeader | null;
  contents;
  target_id;

  constructor(data: any) {
    super();
    this.header = Parser.parseItem<ItemSectionHeader | ItemSectionTabbedHeader>(
      data.header,
      [ItemSectionHeader, ItemSectionTabbedHeader],
    );
    this.contents = Parser.parse(data.contents, true);

    if (data.targetId || data.sectionIdentifier) {
      this.target_id = data?.target_id || data?.sectionIdentifier;
    }
  }
}
