import Parser from '../../index.ts';
import { YTNode } from '../../helpers.ts';

class AddBannerToLiveChatCommand extends YTNode {
  static type = 'AddBannerToLiveChatCommand';

  banner;

  constructor(data: any) {
    super();
    this.banner = Parser.parse(data.bannerRenderer);
  }
}

export default AddBannerToLiveChatCommand;
