import { ParsedResponse, Parser } from '../index.ts';
import { Actions, AxioslikeResponse } from '../../core/Actions.ts';
import { InnertubeError } from '../../utils/Utils.ts';

import { Feed } from '../../core/Feed.ts';
import { History } from './History.ts';
import { Playlist } from './Playlist.ts';

import { Tab } from '../classes/Tab.ts';
import { Menu } from '../classes/menus/Menu.ts';
import { Shelf } from '../classes/Shelf.ts';
import { Button } from '../classes/Button.ts';
import { SectionList } from '../classes/SectionList.ts';
import { ItemSection } from '../classes/ItemSection.ts';
import { TwoColumnBrowseResults } from '../classes/TwoColumnBrowseResults.ts';

import { ProfileColumn } from '../classes/ProfileColumn.ts';
import { ProfileColumnStats } from '../classes/ProfileColumnStats.ts';
import { ProfileColumnUserInfo } from '../classes/ProfileColumnUserInfo.ts';

export class Library {
  #actions;
  #page;

  profile;
  sections;

  constructor(response: AxioslikeResponse, actions: Actions) {
    this.#actions = actions;
    this.#page = Parser.parseResponse(response);

    const two_col = this.#page.contents.item().as(TwoColumnBrowseResults);

    if (!two_col) {
      throw new InnertubeError(
        'Response did not have a TwoColumnBrowseResults.',
      );
    }

    const tab = two_col.tabs.array().as(Tab).get({ selected: true });

    if (!tab) {
      throw new InnertubeError('Could not find target tab.');
    }

    const stats =
      two_col.secondary_contents.item().as(ProfileColumn).items.array().get({
        type: 'ProfileColumnStats',
      })?.as(ProfileColumnStats) || null;
    const user_info =
      two_col.secondary_contents.item().as(ProfileColumn).items.array().get({
        type: 'ProfileColumnUserInfo',
      })?.as(ProfileColumnUserInfo) || null;

    this.profile = { stats, user_info };

    if (!tab.content) {
      throw new InnertubeError('Target tab did not have any content.');
    }

    const shelves = tab.content.as(SectionList).contents.array().as(ItemSection)
      .map((is: ItemSection) => is.contents?.firstOfType(Shelf));

    this.sections = shelves.map((shelf: any) => ({
      type: shelf.icon_type,
      title: shelf.title,
      contents: shelf.content?.item().items.array() || [],
      getAll: () => this.#getAll(shelf),
    }));
  }

  async #getAll(shelf: Shelf): Promise<Playlist | History | Feed> {
    if (!shelf.menu?.item().as(Menu).hasKey('top_level_buttons')) {
      throw new InnertubeError(
        `The ${shelf.title.text} shelf doesn't have more items`,
      );
    }

    const button = await shelf.menu.item().as(Menu).top_level_buttons.get({
      text: 'See all',
    });

    if (!button) {
      throw new InnertubeError('Did not find target button.');
    }

    const page = await button.as(Button).endpoint.callTest(this.#actions, {
      parse: true,
    });

    switch (shelf.icon_type) {
      case 'LIKE':
      case 'WATCH_LATER':
        return new Playlist(this.#actions, page, true);
      case 'WATCH_HISTORY':
        return new History(this.#actions, page, true);
      case 'CONTENT_CUT':
        return new Feed(this.#actions, page, true);
      default:
        throw new InnertubeError('Target shelf not implemented.');
    }
  }

  get history() {
    return this.sections.find((section) => section.type === 'WATCH_HISTORY');
  }

  get watch_later() {
    return this.sections.find((section) => section.type === 'WATCH_LATER');
  }

  get liked_videos() {
    return this.sections.find((section) => section.type === 'LIKE');
  }

  get playlists() {
    return this.sections.find((section) => section.type === 'PLAYLISTS');
  }

  get clips() {
    return this.sections.find((section) => section.type === 'CONTENT_CUT');
  }

  get page(): ParsedResponse {
    return this.#page;
  }
}
