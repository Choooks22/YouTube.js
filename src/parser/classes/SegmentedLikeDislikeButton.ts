import { Parser } from '../index.ts';
import { ToggleButton } from './ToggleButton.ts';
import { YTNode } from '../helpers.ts';

export class SegmentedLikeDislikeButton extends YTNode {
  static type = 'SegmentedLikeDislikeButton';

  like_button: ToggleButton | null;
  dislike_button: ToggleButton | null;

  constructor(data: any) {
    super();
    this.like_button = Parser.parseItem<ToggleButton>(
      data.likeButton,
      ToggleButton,
    );
    this.dislike_button = Parser.parseItem<ToggleButton>(
      data.dislikeButton,
      ToggleButton,
    );
  }
}
