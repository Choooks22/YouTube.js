import { Button } from '../Button.ts';

export class MenuNavigationItem extends Button {
  static type = 'MenuNavigationItem';

  constructor(data: any) {
    super(data);
  }
}
