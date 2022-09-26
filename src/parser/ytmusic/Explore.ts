import Parser, { ParsedResponse } from '../index.ts';

import { InnertubeError } from '../../utils/Utils.ts';
import { AxioslikeResponse } from '../../core/Actions.ts';

import Grid from '../classes/Grid.ts';
import SectionList from '../classes/SectionList.ts';
import SingleColumnBrowseResults from '../classes/SingleColumnBrowseResults.ts';
import MusicNavigationButton from '../classes/MusicNavigationButton.ts';
import MusicCarouselShelf from '../classes/MusicCarouselShelf.ts';

class Explore {
  #page;

  top_buttons;
  sections;

  constructor(response: AxioslikeResponse) {
    this.#page = Parser.parseResponse(response.data);

    const tab = this.#page.contents.item().as(SingleColumnBrowseResults).tabs
      .get({ selected: true });

    if (!tab) {
      throw new InnertubeError('Could not find target tab.');
    }

    const section_list = tab.content?.as(SectionList);

    if (!section_list) {
      throw new InnertubeError('Target tab did not have any content.');
    }

    this.top_buttons =
      section_list.contents.array().firstOfType(Grid)?.items.array().as(
        MusicNavigationButton,
      ) || ([] as MusicNavigationButton[]);
    this.sections = section_list.contents.array().getAll({
      type: 'MusicCarouselShelf',
    }) as MusicCarouselShelf[];
  }

  get page(): ParsedResponse {
    return this.#page;
  }
}

export default Explore;
