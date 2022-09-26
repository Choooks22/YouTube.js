import Parser, { ParsedResponse } from '../index.ts';
import { AxioslikeResponse } from '../../core/Actions.ts';
import Element from '../classes/Element.ts';

class Analytics {
  #page;
  sections;

  constructor(response: AxioslikeResponse) {
    this.#page = Parser.parseResponse(response.data);
    this.sections = this.#page.contents_memo?.get('Element')
      ?.map((el) => el.as(Element).model?.item());
  }

  get page(): ParsedResponse {
    return this.#page;
  }
}

export default Analytics;
