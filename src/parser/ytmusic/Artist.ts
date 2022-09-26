import { ParsedResponse, Parser } from '../index.ts';
import { Actions, AxioslikeResponse } from '../../core/Actions.ts';
import { InnertubeError } from '../../utils/Utils.ts';

import { MusicShelf } from '../classes/MusicShelf.ts';
import { MusicCarouselShelf } from '../classes/MusicCarouselShelf.ts';
import { MusicPlaylistShelf } from '../classes/MusicPlaylistShelf.ts';
import { MusicImmersiveHeader } from '../classes/MusicImmersiveHeader.ts';
import { MusicVisualHeader } from '../classes/MusicVisualHeader.ts';
import { MusicHeader } from '../classes/MusicHeader.ts';

export class Artist {
  #page;
  #actions;

  header;
  sections;

  constructor(response: AxioslikeResponse | ParsedResponse, actions: Actions) {
    this.#page = Parser.parseResponse((response as AxioslikeResponse).data);
    this.#actions = actions;

    this.header = this.page.header.item().as(
      MusicImmersiveHeader,
      MusicVisualHeader,
      MusicHeader,
    );

    const music_shelf =
      this.#page.contents_memo.get('MusicShelf') as MusicShelf[] || [];
    const music_carousel_shelf = this.#page.contents_memo.get(
      'MusicCarouselShelf',
    ) as MusicCarouselShelf[] || [];

    this.sections = [...music_shelf, ...music_carousel_shelf];
  }

  async getAllSongs(): Promise<MusicPlaylistShelf | null> {
    const music_shelves = this.sections.filter((section) =>
      section.type === 'MusicShelf'
    ) as MusicShelf[];

    if (!music_shelves.length) {
      throw new InnertubeError('Could not find any node of type MusicShelf.');
    }

    const shelf = music_shelves.find((shelf) =>
      shelf.title.toString() === 'Songs'
    ) as MusicShelf;

    if (!shelf) {
      throw new InnertubeError('Could not find target shelf (Songs).');
    }

    if (!shelf.endpoint) {
      throw new InnertubeError(
        'Target shelf (Songs) did not have an endpoint.',
      );
    }

    const page = await shelf.endpoint.call(
      this.#actions,
      'YTMUSIC',
      true,
    ) as ParsedResponse;
    const contents = page.contents_memo.get('MusicPlaylistShelf')?.[0]?.as(
      MusicPlaylistShelf,
    ) || null;

    return contents;
  }

  get page(): ParsedResponse {
    return this.#page;
  }
}
