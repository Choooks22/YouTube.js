import { Parser } from '../index.ts';
import { YTNode } from '../helpers.ts';

export class HorizontalCardList extends YTNode {
  static type = 'HorizontalCardList';

  cards;
  header;
  previous_button;
  next_button;

  constructor(data: any) {
    super();
    this.cards = Parser.parse(data.cards);
    this.header = Parser.parse(data.header);
    this.previous_button = Parser.parse(data.previousButton);
    this.next_button = Parser.parse(data.nextButton);
  }
}
