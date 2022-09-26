import LiveChatTextMessage from './LiveChatTextMessage.ts';
import Parser from '../../../index.ts';

class LiveChatViewerEngagementMessage extends LiveChatTextMessage {
  static type = 'LiveChatViewerEngagementMessage';

  icon_type: string;
  action_button;

  constructor(data: any) {
    super(data);
    delete this.author;
    delete this.menu_endpoint;
    this.icon_type = data.icon.iconType;
    this.action_button = Parser.parse(data.actionButton);
  }
}

export default LiveChatViewerEngagementMessage;
