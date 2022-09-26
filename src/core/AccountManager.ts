import { Proto } from '../proto/proto.ts';
import { Actions } from './Actions.ts';

import { Analytics } from '../parser/youtube/Analytics.ts';
import { TimeWatched } from '../parser/youtube/TimeWatched.ts';
import { AccountInfo } from '../parser/youtube/AccountInfo.ts';
import { Settings } from '../parser/youtube/Settings.ts';

export class AccountManager {
  #actions;
  channel;

  constructor(actions: Actions) {
    this.#actions = actions;

    this.channel = {
      /**
       * Edits channel name.
       */
      editName: (new_name: string) =>
        this.#actions.channel('channel/edit_name', { new_name }),
      /**
       * Edits channel description.
       */
      editDescription: (new_description: string) =>
        this.#actions.channel('channel/edit_description', { new_description }),
      /**
       * Retrieves basic channel analytics.
       */
      getBasicAnalytics: () => this.getAnalytics(),
    };
  }

  /**
   * Retrieves channel info.
   */
  async getInfo() {
    const response = await this.#actions.execute('/account/accounts_list', {
      client: 'ANDROID',
    });
    return new AccountInfo(response);
  }

  /**
   * Retrieves time watched statistics.
   */
  async getTimeWatched() {
    const response = await this.#actions.execute('/browse', {
      browseId: 'SPtime_watched',
      client: 'ANDROID',
    });

    return new TimeWatched(response);
  }

  /**
   * Opens YouTube settings.
   */
  async getSettings() {
    const response = await this.#actions.execute('/browse', {
      browseId: 'SPaccount_overview',
    });

    return new Settings(this.#actions, response);
  }

  /**
   * Retrieves basic channel analytics.
   */
  async getAnalytics() {
    const info = await this.getInfo();

    const params = Proto.encodeChannelAnalyticsParams(
      info.footers?.endpoint.payload.browseId,
    );
    const response = await this.#actions.browse('FEanalytics_screen', {
      params,
      client: 'ANDROID',
    });

    return new Analytics(response);
  }
}
