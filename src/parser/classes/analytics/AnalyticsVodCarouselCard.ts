import { AnalyticsVideo } from './AnalyticsVideo.ts';
import { YTNode } from '../../helpers.ts';

export class AnalyticsVodCarouselCard extends YTNode {
  static type = 'AnalyticsVodCarouselCard';

  title: string;
  videos: AnalyticsVideo[] | null;
  no_data_message?: string;

  constructor(data: any) {
    super();
    this.title = data.title;

    if (data.noDataMessage) {
      this.no_data_message = data.noDataMessage;
    }

    this.videos =
      data.videoCarouselData?.videos.map((video: any) =>
        new AnalyticsVideo(video)
      ) ||
      null;
  }
}
