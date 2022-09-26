import Parser, { ParsedResponse, SectionListContinuation } from '../index.ts';
import Actions, { AxioslikeResponse } from '../../core/Actions.ts';
import { InnertubeError } from '../../utils/Utils.ts';

import SectionList from '../classes/SectionList.ts';
import SingleColumnBrowseResults from '../classes/SingleColumnBrowseResults.ts';
import MusicCarouselShelf from '../classes/MusicCarouselShelf.ts';

class HomeFeed {
  #page;
  #actions;
  #continuation;

  sections;

  constructor(response: AxioslikeResponse | ParsedResponse, actions: Actions) {
    this.#actions = actions;
    this.#page = Parser.parseResponse((response as AxioslikeResponse).data);

    const tab = this.#page.contents.item().as(SingleColumnBrowseResults).tabs
      .get({ selected: true });

    if (!tab) {
      throw new InnertubeError('Could not get Home tab.');
    }

    if (tab.key('content').isNull()) {
      if (!this.#page.continuation_contents) {
        throw new InnertubeError('Continuation did not have any content.');
      }

      this.#continuation =
        this.#page.continuation_contents.as(SectionListContinuation)
          .continuation;
      this.sections = this.#page.continuation_contents.as(
        SectionListContinuation,
      ).contents?.as(MusicCarouselShelf);

      return;
    }

    this.#continuation = tab.content?.as(SectionList).continuation;
    this.sections = tab.content?.as(SectionList).contents.array().as(
      MusicCarouselShelf,
    );
  }

  /**
   * Retrieves home feed continuation.
   */
  async getContinuation(): Promise<HomeFeed> {
    if (!this.#continuation) {
      throw new InnertubeError('Continuation not found.');
    }

    const response = await this.#actions.browse(this.#continuation, {
      is_ctoken: true,
      client: 'YTMUSIC',
    });
    return new HomeFeed(response, this.#actions);
  }

  get has_continuation(): boolean {
    return !!this.#continuation;
  }

  get page() {
    return this.#page;
  }
}

export default HomeFeed;
