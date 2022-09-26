import { Parser } from '../index.ts';
import { ChildElement } from './misc/ChildElement.ts';

import { YTNode } from '../helpers.ts';

export class Element extends YTNode {
  static type = 'Element';

  model;
  child_elements?: ChildElement[];

  constructor(data: any) {
    super();

    if (Reflect.has(data, 'elementRenderer')) {
      return Parser.parseItem<Element>(data, Element) as Element;
    }

    const type = data.newElement.type.componentType;
    this.model = Parser.parse(type?.model);

    if (data.newElement?.childElements) {
      this.child_elements = data.newElement?.childElements?.map((el: any) =>
        new ChildElement(el)
      ) || null;
    }
  }
}
