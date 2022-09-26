import { ParsedResponse, Parser } from '../index.ts';
import { AxioslikeResponse } from '../../core/Actions.ts';

import { AccountSectionList } from '../classes/AccountSectionList.ts';
import { AccountItemSection } from '../classes/AccountItemSection.ts';
import { AccountChannel } from '../classes/AccountChannel.ts';

export class AccountInfo {
  #page;

  contents: AccountItemSection | null;
  footers: AccountChannel | null;

  constructor(response: AxioslikeResponse) {
    this.#page = Parser.parseResponse(response.data);

    const account_section_list =
      this.#page.contents.array().as(AccountSectionList)[0];

    this.contents = account_section_list.contents;
    this.footers = account_section_list.footers;
  }

  get page(): ParsedResponse {
    return this.#page;
  }
}
