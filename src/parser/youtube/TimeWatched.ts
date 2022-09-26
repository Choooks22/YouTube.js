import { ParsedResponse, Parser } from '../index.ts';
import { AxioslikeResponse } from '../../core/Actions.ts';

import { ItemSection } from '../classes/ItemSection.ts';
import { SingleColumnBrowseResults } from '../classes/SingleColumnBrowseResults.ts';
import { SectionList } from '../classes/SectionList.ts';

import { InnertubeError } from '../../utils/Utils.ts';

export class TimeWatched {
  #page;
  contents;

  constructor(response: AxioslikeResponse) {
    this.#page = Parser.parseResponse(response.data);

    const tab = this.#page.contents.item().as(SingleColumnBrowseResults).tabs
      .get({ selected: true });

    if (!tab) {
      throw new InnertubeError('Could not find target tab.');
    }

    this.contents = tab.content?.as(SectionList).contents.array().as(
      ItemSection,
    );
  }

  get page(): ParsedResponse {
    return this.#page;
  }
}
