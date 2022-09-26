import Text from './misc/Text.ts';
import Parser from '../index.ts';
import MusicThumbnail from './MusicThumbnail.ts';

import { YTNode } from '../helpers.ts';

class MusicImmersiveHeader extends YTNode {
  static type = 'MusicImmersiveHeader';

  title: Text;
  description: Text;
  thumbnail: MusicThumbnail | null;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
    this.description = new Text(data.description);
    this.thumbnail = Parser.parseItem<MusicThumbnail>(
      data.thumbnail,
      MusicThumbnail,
    );
    /**
         Not useful for now.
         this.menu = Parser.parse(data.menu);
         this.play_button = Parser.parse(data.playButton);
         this.start_radio_button = Parser.parse(data.startRadioButton);
     */
  }
}

export default MusicImmersiveHeader;
