import Parser from '../../index.ts';
import { YTNode } from '../../helpers.ts';

class ShowLiveChatActionPanelAction extends YTNode {
  static type = 'ShowLiveChatActionPanelAction';

  panel_to_show;

  constructor(data: any) {
    super();
    this.panel_to_show = Parser.parse(data.panelToShow);
  }
}

export default ShowLiveChatActionPanelAction;
