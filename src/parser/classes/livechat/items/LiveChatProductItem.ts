import Parser from '../../../index.ts';
import { YTNode } from '../../../helpers.ts';

import Text from '../../misc/Text.ts';
import Thumbnail from '../../misc/Thumbnail.ts';
import NavigationEndpoint from '../../NavigationEndpoint.ts';

class LiveChatProductItem extends YTNode {
  static type = 'LiveChatProductItem';

  title: string;
  accessibility_title: string;
  thumbnail: Thumbnail[];
  price: string;
  vendor_name: string;
  from_vendor_text: string;
  information_button;
  endpoint: NavigationEndpoint;
  creator_message: string;
  creator_name: string;
  author_photo: Thumbnail[];
  information_dialog;
  is_verified: boolean;
  creator_custom_message: Text;

  constructor(data: any) {
    super();

    this.title = data.title;
    this.accessibility_title = data.accessibilityTitle;
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    this.price = data.price;
    this.vendor_name = data.vendorName;
    this.from_vendor_text = data.fromVendorText;
    this.information_button = Parser.parse(data.informationButton);
    this.endpoint = new NavigationEndpoint(data.onClickCommand);
    this.creator_message = data.creatorMessage;
    this.creator_name = data.creatorName;
    this.author_photo = Thumbnail.fromResponse(data.authorPhoto);
    this.information_dialog = Parser.parse(data.informationDialog);
    this.is_verified = data.isVerified;
    this.creator_custom_message = new Text(data.creatorCustomMessage);
  }
}

export default LiveChatProductItem;
