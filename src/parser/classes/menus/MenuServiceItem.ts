import { Button } from '../Button.ts';

export class MenuServiceItem extends Button {
  static type = 'MenuServiceItem';

  constructor(data: any) {
    super(data);
  }
}
