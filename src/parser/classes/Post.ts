import { BackstagePost } from './BackstagePost.ts';

export class Post extends BackstagePost {
  static type = 'Post';

  constructor(data: any) {
    super(data);
  }
}
