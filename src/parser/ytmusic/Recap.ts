import { ParsedResponse, Parser } from '../index.ts';
import { Actions, AxioslikeResponse } from '../../core/Actions.ts';

import { Playlist } from './Playlist.ts';
import { MusicHeader } from '../classes/MusicHeader.ts';
import { MusicCarouselShelf } from '../classes/MusicCarouselShelf.ts';
import { MusicElementHeader } from '../classes/MusicElementHeader.ts';
import { HighlightsCarousel } from '../classes/HighlightsCarousel.ts';
import { SingleColumnBrowseResults } from '../classes/SingleColumnBrowseResults.ts';

import { Tab } from '../classes/Tab.ts';
import { ItemSection } from '../classes/ItemSection.ts';
import { SectionList } from '../classes/SectionList.ts';
import { Message } from '../classes/Message.ts';

import { InnertubeError } from '../../utils/Utils.ts';

export class Recap {
  #page;
  #actions;

  header;
  sections;

  constructor(response: AxioslikeResponse, actions: Actions) {
    this.#page = Parser.parseResponse(response.data);
    this.#actions = actions;

    const header = this.#page.header.item();

    this.header = header.is(MusicElementHeader)
      ? this.#page.header.item().as(MusicElementHeader).element?.model?.item()
        .as(HighlightsCarousel)
      : this.#page.header.item().as(MusicHeader);

    const tab = this.#page.contents.item().as(SingleColumnBrowseResults).tabs
      .firstOfType(Tab);

    if (!tab) {
      throw new InnertubeError('Target tab not found');
    }

    this.sections = tab.content?.as(SectionList).contents.array().as(
      ItemSection,
      MusicCarouselShelf,
      Message,
    );
  }

  /**
   * Retrieves recap playlist.
   */
  async getPlaylist() {
    if (!this.header) {
      throw new InnertubeError('Header not found');
    }

    if (!this.header.is(HighlightsCarousel)) {
      throw new InnertubeError(
        'Recap playlist not available, check back later.',
      );
    }

    const endpoint = this.header.panels[0].text_on_tap_endpoint;
    const response = await endpoint.callTest(this.#actions, {
      client: 'YTMUSIC',
    });

    return new Playlist(response, this.#actions);
  }

  get page(): ParsedResponse {
    return this.#page;
  }
}
