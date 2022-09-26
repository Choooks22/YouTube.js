import { ParsedResponse, Parser } from '../index.ts';
import { Actions, AxioslikeResponse } from '../../core/Actions.ts';

import { MusicDetailHeader } from '../classes/MusicDetailHeader.ts';
import { MicroformatData } from '../classes/MicroformatData.ts';
import { MusicCarouselShelf } from '../classes/MusicCarouselShelf.ts';
import { MusicShelf } from '../classes/MusicShelf.ts';

export class Album {
  #page;
  #actions;

  header;
  contents;
  sections;

  url: string | null;

  constructor(response: AxioslikeResponse, actions: Actions) {
    this.#page = Parser.parseResponse(response.data);
    this.#actions = actions;

    this.header = this.#page.header.item().as(MusicDetailHeader);
    this.url = this.#page.microformat?.as(MicroformatData).url_canonical ||
      null;

    this.contents =
      this.#page.contents_memo.get('MusicShelf')?.[0].as(MusicShelf).contents;
    this.sections = this.#page.contents_memo.get(
      'MusicCarouselShelf',
    ) as MusicCarouselShelf[] || ([] as MusicCarouselShelf[]);
  }

  get page(): ParsedResponse {
    return this.#page;
  }
}
