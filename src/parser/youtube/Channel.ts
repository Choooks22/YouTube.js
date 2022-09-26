import { Actions } from '../../core/Actions.ts';
import { TabbedFeed } from '../../core/TabbedFeed.ts';
import { C4TabbedHeader } from '../classes/C4TabbedHeader.ts';
import { ChannelAboutFullMetadata } from '../classes/ChannelAboutFullMetadata.ts';
import { ChannelMetadata } from '../classes/ChannelMetadata.ts';
import { MicroformatData } from '../classes/MicroformatData.ts';
import { Tab } from '../classes/Tab.ts';

export class Channel extends TabbedFeed {
  header;
  metadata;
  sponsor_button;
  subscribe_button;
  current_tab;

  constructor(actions: Actions, data: any, already_parsed = false) {
    super(actions, data, already_parsed);

    this.header = this.page.header.item().as(C4TabbedHeader);
    const metadata = this.page.metadata.item().as(ChannelMetadata);
    const microformat = this.page.microformat?.as(MicroformatData);

    this.metadata = { ...metadata, ...(microformat || {}) };
    this.sponsor_button = this.header.sponsor_button;
    this.subscribe_button = this.header.subscribe_button;

    const tab = this.page.contents.item().key('tabs').parsed().array()
      .filterType(Tab).get({ selected: true });

    this.current_tab = tab;
  }

  async getVideos() {
    const tab = await this.getTab('Videos');
    return new Channel(this.actions, tab.page, true);
  }

  async getPlaylists() {
    const tab = await this.getTab('Playlists');
    return new Channel(this.actions, tab.page, true);
  }

  async getHome() {
    const tab = await this.getTab('Home');
    return new Channel(this.actions, tab.page, true);
  }

  async getCommunity() {
    const tab = await this.getTab('Community');
    return new Channel(this.actions, tab.page, true);
  }

  async getChannels() {
    const tab = await this.getTab('Channels');
    return new Channel(this.actions, tab.page, true);
  }

  /**
   * Retrieves the channel about page.
   * Note that this does not return a new {@link Channel} object.
   */
  async getAbout() {
    const tab = await this.getTab('About');
    return tab.memo.getType(ChannelAboutFullMetadata)?.[0];
  }
}
