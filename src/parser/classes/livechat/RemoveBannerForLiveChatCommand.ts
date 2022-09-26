import { YTNode } from '../../helpers.ts';

export class RemoveBannerForLiveChatCommand extends YTNode {
  static type = 'RemoveBannerForLiveChatCommand';

  target_action_id: string;

  constructor(data: any) {
    super();
    this.target_action_id = data.targetActionId;
  }
}
