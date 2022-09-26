import { Parser } from '../index.ts';
import { YTNode } from '../helpers.ts';
import { Tab } from './Tab.ts';

export class TabbedSearchResults extends YTNode {
  static type = 'TabbedSearchResults';

  tabs;

  constructor(data: any) {
    super();
    this.tabs = Parser.parseArray<Tab>(data.tabs, Tab);
  }
}
