import Text from './misc/Text.ts';
import Thumbnail from './misc/Thumbnail.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import { YTNode } from '../helpers.ts';

class Poll extends YTNode {
  static type = 'Poll';

  choices: {
    text: string;
    select_endpoint: NavigationEndpoint | null;
    deselect_endpoint: NavigationEndpoint | null;
    vote_ratio_if_selected: number | string | null;
    vote_percentage_if_selected: number | string | null;
    vote_ratio_if_not_selected: number | string | null;
    vote_percentage_if_not_selected: number | string | null;
    image: Thumbnail[] | null;
  }[];

  poll_type;
  total_votes;
  live_chat_poll_id;

  constructor(data: any) {
    super();

    this.choices = data.choices.map((choice: any) => ({
      text: new Text(choice.text).toString(),
      select_endpoint: choice.selectServiceEndpoint
        ? new NavigationEndpoint(choice.selectServiceEndpoint)
        : null,
      deselect_endpoint: choice.deselectServiceEndpoint
        ? new NavigationEndpoint(choice.deselectServiceEndpoint)
        : null,
      vote_ratio_if_selected: choice?.voteRatioIfSelected || null,
      vote_percentage_if_selected: new Text(choice.votePercentageIfSelected),
      vote_ratio_if_not_selected: choice?.voteRatioIfSelected || null,
      vote_percentage_if_not_selected: new Text(
        choice.votePercentageIfSelected,
      ),
      image: choice.image ? Thumbnail.fromResponse(choice.image) : null,
    }));

    if (data.type) {
      this.poll_type = data.type;
    }

    if (data.totalVotes) {
      this.total_votes = new Text(data.totalVotes);
    }

    if (data.liveChatPollId) {
      this.live_chat_poll_id = data.liveChatPollId;
    }
  }
}

export default Poll;
