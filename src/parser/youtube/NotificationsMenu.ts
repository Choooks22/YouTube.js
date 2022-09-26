import { Parser } from '../index.ts';
import { Actions, AxioslikeResponse } from '../../core/Actions.ts';
import { InnertubeError } from '../../utils/Utils.ts';

import { Notification } from '../classes/Notification.ts';
import { SimpleMenuHeader } from '../classes/menus/SimpleMenuHeader.ts';
import { ContinuationItem } from '../classes/ContinuationItem.ts';

export class NotificationsMenu {
  #page;
  #actions;

  header;
  contents;

  constructor(actions: Actions, response: AxioslikeResponse) {
    this.#actions = actions;
    this.#page = Parser.parseResponse(response.data);

    this.header = this.#page.actions_memo.get('SimpleMenuHeader')?.[0]?.as(
      SimpleMenuHeader,
    ) || null;
    this.contents = this.#page.actions_memo.get(
      'Notification',
    ) as Notification[];
  }

  async getContinuation(): Promise<NotificationsMenu> {
    const continuation = this.#page.actions_memo.get('ContinuationItem')?.[0]
      .as(ContinuationItem);

    if (!continuation) {
      throw new InnertubeError('Continuation not found');
    }

    const response = await continuation.endpoint.callTest(this.#actions, {
      parse: false,
    });
    return new NotificationsMenu(this.#actions, response);
  }
}
