import { Text } from '../misc/Text.ts';
import { YTNode } from '../helpers.ts';

export class MetadataRow extends YTNode {
  static type = 'MetadataRow';

  title;
  contents;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
    this.contents = (data.contents as any[]).map((content) =>
      new Text(content)
    );
  }
}
