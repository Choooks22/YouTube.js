import { YTNode } from '../helpers.ts';

export class MusicDownloadStateBadge extends YTNode {
  static type = 'MusicDownloadStateBadge';

  playlist_id: string;
  supported_download_states: string[];

  constructor(data: any) {
    super();
    this.playlist_id = data.playlistId;
    this.supported_download_states = data.supportedDownloadStates;
  }
}
