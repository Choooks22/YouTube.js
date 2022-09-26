import Parser from '../index.ts';
import { YTNode } from '../helpers.ts';

class PlaylistVideoList extends YTNode {
  static type = 'PlaylistVideoList';

  id: string;
  is_editable: boolean;
  can_reorder: boolean;
  videos;

  constructor(data: any) {
    super();
    this.id = data.playlistId;
    this.is_editable = data.isEditable;
    this.can_reorder = data.canReorder;
    this.videos = Parser.parse(data.contents);
  }
}

export default PlaylistVideoList;
