import { YTNode } from '../helpers.ts';

class PlaylistMetadata extends YTNode {
  static type = 'PlaylistMetadata';

  title: string;
  description: string;

  constructor(data: any) {
    super();
    this.title = data.title;
    this.description = data.description || null;
    // XXX: Appindexing should be in microformat
  }
}

export default PlaylistMetadata;
