import Actions from '../../core/Actions.ts';

import Feed from '../../core/Feed.ts';
import ItemSection from '../classes/ItemSection.ts';
import BrowseFeedActions from '../classes/BrowseFeedActions.ts';

// TODO: make feed actions usable
class History extends Feed {
  sections;
  feed_actions;

  constructor(actions: Actions, data: any, already_parsed = false) {
    super(actions, data, already_parsed);
    this.sections = this.memo.get('ItemSection') as ItemSection[];
    this.feed_actions =
      this.memo.get('BrowseFeedActions')?.[0]?.as(BrowseFeedActions) ||
      ([] as BrowseFeedActions[]);
  }

  /**
   * Retrieves next batch of contents.
   */
  async getContinuation(): Promise<History> {
    const continuation = await this.getContinuationData();
    return new History(this.actions, continuation, true);
  }
}

export default History;
