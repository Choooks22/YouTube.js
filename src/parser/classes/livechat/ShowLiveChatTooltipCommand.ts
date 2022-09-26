import { Parser } from '../../index.ts';
import { YTNode } from '../../helpers.ts';

export class ShowLiveChatTooltipCommand extends YTNode {
  static type = 'ShowLiveChatTooltipCommand';

  tooltip;

  constructor(data: any) {
    super();
    this.tooltip = Parser.parse(data.tooltip);
  }
}
