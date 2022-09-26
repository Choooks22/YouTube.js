// This file was auto generated, do not edit.
// See ./scripts/build-parser-map.js
import { YTNodeConstructor } from './helpers.ts';

import { AccountChannel } from './classes/AccountChannel.ts';
import { AccountItemSection } from './classes/AccountItemSection.ts';
import { AccountItemSectionHeader } from './classes/AccountItemSectionHeader.ts';
import { AccountSectionList } from './classes/AccountSectionList.ts';
import { AppendContinuationItemsAction } from './classes/actions/AppendContinuationItemsAction.ts';
import { OpenPopupAction } from './classes/actions/OpenPopupAction.ts';
import { AnalyticsMainAppKeyMetrics } from './classes/analytics/AnalyticsMainAppKeyMetrics.ts';
import { AnalyticsRoot } from './classes/analytics/AnalyticsRoot.ts';
import { AnalyticsShortsCarouselCard } from './classes/analytics/AnalyticsShortsCarouselCard.ts';
import { AnalyticsVideo } from './classes/analytics/AnalyticsVideo.ts';
import { AnalyticsVodCarouselCard } from './classes/analytics/AnalyticsVodCarouselCard.ts';
import { CtaGoToCreatorStudio } from './classes/analytics/CtaGoToCreatorStudio.ts';
import { DataModelSection } from './classes/analytics/DataModelSection.ts';
import { StatRow } from './classes/analytics/StatRow.ts';
import { AudioOnlyPlayability } from './classes/AudioOnlyPlayability.ts';
import { AutomixPreviewVideo } from './classes/AutomixPreviewVideo.ts';
import { BackstageImage } from './classes/BackstageImage.ts';
import { BackstagePost } from './classes/BackstagePost.ts';
import { BackstagePostThread } from './classes/BackstagePostThread.ts';
import { BrowseFeedActions } from './classes/BrowseFeedActions.ts';
import { BrowserMediaSession } from './classes/BrowserMediaSession.ts';
import { Button } from './classes/Button.ts';
import { C4TabbedHeader } from './classes/C4TabbedHeader.ts';
import { CallToActionButton } from './classes/CallToActionButton.ts';
import { Card } from './classes/Card.ts';
import { CardCollection } from './classes/CardCollection.ts';
import { Channel } from './classes/Channel.ts';
import { ChannelAboutFullMetadata } from './classes/ChannelAboutFullMetadata.ts';
import { ChannelFeaturedContent } from './classes/ChannelFeaturedContent.ts';
import { ChannelHeaderLinks } from './classes/ChannelHeaderLinks.ts';
import { ChannelMetadata } from './classes/ChannelMetadata.ts';
import { ChannelMobileHeader } from './classes/ChannelMobileHeader.ts';
import { ChannelOptions } from './classes/ChannelOptions.ts';
import { ChannelThumbnailWithLink } from './classes/ChannelThumbnailWithLink.ts';
import { ChannelVideoPlayer } from './classes/ChannelVideoPlayer.ts';
import { ChildVideo } from './classes/ChildVideo.ts';
import { ChipCloud } from './classes/ChipCloud.ts';
import { ChipCloudChip } from './classes/ChipCloudChip.ts';
import { CollaboratorInfoCardContent } from './classes/CollaboratorInfoCardContent.ts';
import { CollageHeroImage } from './classes/CollageHeroImage.ts';
import { AuthorCommentBadge } from './classes/comments/AuthorCommentBadge.ts';
import { Comment } from './classes/comments/Comment.ts';
import { CommentActionButtons } from './classes/comments/CommentActionButtons.ts';
import { CommentReplies } from './classes/comments/CommentReplies.ts';
import { CommentReplyDialog } from './classes/comments/CommentReplyDialog.ts';
import { CommentsEntryPointHeader } from './classes/comments/CommentsEntryPointHeader.ts';
import { CommentsHeader } from './classes/comments/CommentsHeader.ts';
import { CommentSimplebox } from './classes/comments/CommentSimplebox.ts';
import { CommentThread } from './classes/comments/CommentThread.ts';
import { CompactLink } from './classes/CompactLink.ts';
import { CompactMix } from './classes/CompactMix.ts';
import { CompactPlaylist } from './classes/CompactPlaylist.ts';
import { CompactVideo } from './classes/CompactVideo.ts';
import { ConfirmDialog } from './classes/ConfirmDialog.ts';
import { ContinuationItem } from './classes/ContinuationItem.ts';
import { CopyLink } from './classes/CopyLink.ts';
import { CreatePlaylistDialog } from './classes/CreatePlaylistDialog.ts';
import { DidYouMean } from './classes/DidYouMean.ts';
import { DownloadButton } from './classes/DownloadButton.ts';
import { Dropdown } from './classes/Dropdown.ts';
import { DropdownItem } from './classes/DropdownItem.ts';
import { Element } from './classes/Element.ts';
import { EmergencyOnebox } from './classes/EmergencyOnebox.ts';
import { Endscreen } from './classes/Endscreen.ts';
import { EndscreenElement } from './classes/EndscreenElement.ts';
import { EndScreenPlaylist } from './classes/EndScreenPlaylist.ts';
import { EndScreenVideo } from './classes/EndScreenVideo.ts';
import { ExpandableTab } from './classes/ExpandableTab.ts';
import { ExpandedShelfContents } from './classes/ExpandedShelfContents.ts';
import { FeedFilterChipBar } from './classes/FeedFilterChipBar.ts';
import { FeedTabbedHeader } from './classes/FeedTabbedHeader.ts';
import { Grid } from './classes/Grid.ts';
import { GridChannel } from './classes/GridChannel.ts';
import { GridHeader } from './classes/GridHeader.ts';
import { GridPlaylist } from './classes/GridPlaylist.ts';
import { GridVideo } from './classes/GridVideo.ts';
import { HighlightsCarousel } from './classes/HighlightsCarousel.ts';
import { HistorySuggestion } from './classes/HistorySuggestion.ts';
import { HorizontalCardList } from './classes/HorizontalCardList.ts';
import { HorizontalList } from './classes/HorizontalList.ts';
import { IconLink } from './classes/IconLink.ts';
import { ItemSection } from './classes/ItemSection.ts';
import { ItemSectionHeader } from './classes/ItemSectionHeader.ts';
import { ItemSectionTab } from './classes/ItemSectionTab.ts';
import { ItemSectionTabbedHeader } from './classes/ItemSectionTabbedHeader.ts';
import { LikeButton } from './classes/LikeButton.ts';
import { LiveChat } from './classes/LiveChat.ts';
import { AddBannerToLiveChatCommand } from './classes/livechat/AddBannerToLiveChatCommand.ts';
import { AddChatItemAction } from './classes/livechat/AddChatItemAction.ts';
import { AddLiveChatTickerItemAction } from './classes/livechat/AddLiveChatTickerItemAction.ts';
import { LiveChatAutoModMessage } from './classes/livechat/items/LiveChatAutoModMessage.ts';
import { LiveChatBanner } from './classes/livechat/items/LiveChatBanner.ts';
import { LiveChatBannerHeader } from './classes/livechat/items/LiveChatBannerHeader.ts';
import { LiveChatBannerPoll } from './classes/livechat/items/LiveChatBannerPoll.ts';
import { LiveChatMembershipItem } from './classes/livechat/items/LiveChatMembershipItem.ts';
import { LiveChatPaidMessage } from './classes/livechat/items/LiveChatPaidMessage.ts';
import { LiveChatPaidSticker } from './classes/livechat/items/LiveChatPaidSticker.ts';
import { LiveChatPlaceholderItem } from './classes/livechat/items/LiveChatPlaceholderItem.ts';
import { LiveChatProductItem } from './classes/livechat/items/LiveChatProductItem.ts';
import { LiveChatTextMessage } from './classes/livechat/items/LiveChatTextMessage.ts';
import { LiveChatTickerPaidMessageItem } from './classes/livechat/items/LiveChatTickerPaidMessageItem.ts';
import { LiveChatTickerSponsorItem } from './classes/livechat/items/LiveChatTickerSponsorItem.ts';
import { LiveChatViewerEngagementMessage } from './classes/livechat/items/LiveChatViewerEngagementMessage.ts';
import { PollHeader } from './classes/livechat/items/PollHeader.ts';
import { LiveChatActionPanel } from './classes/livechat/LiveChatActionPanel.ts';
import { MarkChatItemAsDeletedAction } from './classes/livechat/MarkChatItemAsDeletedAction.ts';
import { MarkChatItemsByAuthorAsDeletedAction } from './classes/livechat/MarkChatItemsByAuthorAsDeletedAction.ts';
import { RemoveBannerForLiveChatCommand } from './classes/livechat/RemoveBannerForLiveChatCommand.ts';
import { ReplaceChatItemAction } from './classes/livechat/ReplaceChatItemAction.ts';
import { ReplayChatItemAction } from './classes/livechat/ReplayChatItemAction.ts';
import { ShowLiveChatActionPanelAction } from './classes/livechat/ShowLiveChatActionPanelAction.ts';
import { ShowLiveChatTooltipCommand } from './classes/livechat/ShowLiveChatTooltipCommand.ts';
import { UpdateDateTextAction } from './classes/livechat/UpdateDateTextAction.ts';
import { UpdateDescriptionAction } from './classes/livechat/UpdateDescriptionAction.ts';
import { UpdateLiveChatPollAction } from './classes/livechat/UpdateLiveChatPollAction.ts';
import { UpdateTitleAction } from './classes/livechat/UpdateTitleAction.ts';
import { UpdateToggleButtonTextAction } from './classes/livechat/UpdateToggleButtonTextAction.ts';
import { UpdateViewershipAction } from './classes/livechat/UpdateViewershipAction.ts';
import { LiveChatAuthorBadge } from './classes/LiveChatAuthorBadge.ts';
import { LiveChatDialog } from './classes/LiveChatDialog.ts';
import { LiveChatHeader } from './classes/LiveChatHeader.ts';
import { LiveChatItemList } from './classes/LiveChatItemList.ts';
import { LiveChatMessageInput } from './classes/LiveChatMessageInput.ts';
import { LiveChatParticipant } from './classes/LiveChatParticipant.ts';
import { LiveChatParticipantsList } from './classes/LiveChatParticipantsList.ts';
import { Menu } from './classes/menus/Menu.ts';
import { MenuNavigationItem } from './classes/menus/MenuNavigationItem.ts';
import { MenuServiceItem } from './classes/menus/MenuServiceItem.ts';
import { MenuServiceItemDownload } from './classes/menus/MenuServiceItemDownload.ts';
import { MultiPageMenu } from './classes/menus/MultiPageMenu.ts';
import { MultiPageMenuNotificationSection } from './classes/menus/MultiPageMenuNotificationSection.ts';
import { MusicMenuItemDivider } from './classes/menus/MusicMenuItemDivider.ts';
import { MusicMultiSelectMenu } from './classes/menus/MusicMultiSelectMenu.ts';
import { MusicMultiSelectMenuItem } from './classes/menus/MusicMultiSelectMenuItem.ts';
import { SimpleMenuHeader } from './classes/menus/SimpleMenuHeader.ts';
import { MerchandiseItem } from './classes/MerchandiseItem.ts';
import { MerchandiseShelf } from './classes/MerchandiseShelf.ts';
import { Message } from './classes/Message.ts';
import { MetadataBadge } from './classes/MetadataBadge.ts';
import { MetadataRow } from './classes/MetadataRow.ts';
import { MetadataRowContainer } from './classes/MetadataRowContainer.ts';
import { MetadataRowHeader } from './classes/MetadataRowHeader.ts';
import { MetadataScreen } from './classes/MetadataScreen.ts';
import { MicroformatData } from './classes/MicroformatData.ts';
import { Mix } from './classes/Mix.ts';
import { Movie } from './classes/Movie.ts';
import { MovingThumbnail } from './classes/MovingThumbnail.ts';
import { MusicCarouselShelf } from './classes/MusicCarouselShelf.ts';
import { MusicCarouselShelfBasicHeader } from './classes/MusicCarouselShelfBasicHeader.ts';
import { MusicDescriptionShelf } from './classes/MusicDescriptionShelf.ts';
import { MusicDetailHeader } from './classes/MusicDetailHeader.ts';
import { MusicDownloadStateBadge } from './classes/MusicDownloadStateBadge.ts';
import { MusicEditablePlaylistDetailHeader } from './classes/MusicEditablePlaylistDetailHeader.ts';
import { MusicElementHeader } from './classes/MusicElementHeader.ts';
import { MusicHeader } from './classes/MusicHeader.ts';
import { MusicImmersiveHeader } from './classes/MusicImmersiveHeader.ts';
import { MusicInlineBadge } from './classes/MusicInlineBadge.ts';
import { MusicItemThumbnailOverlay } from './classes/MusicItemThumbnailOverlay.ts';
import { MusicLargeCardItemCarousel } from './classes/MusicLargeCardItemCarousel.ts';
import { MusicNavigationButton } from './classes/MusicNavigationButton.ts';
import { MusicPlayButton } from './classes/MusicPlayButton.ts';
import { MusicPlaylistShelf } from './classes/MusicPlaylistShelf.ts';
import { MusicQueue } from './classes/MusicQueue.ts';
import { MusicResponsiveListItem } from './classes/MusicResponsiveListItem.ts';
import { MusicResponsiveListItemFixedColumn } from './classes/MusicResponsiveListItemFixedColumn.ts';
import { MusicResponsiveListItemFlexColumn } from './classes/MusicResponsiveListItemFlexColumn.ts';
import { MusicShelf } from './classes/MusicShelf.ts';
import { MusicSideAlignedItem } from './classes/MusicSideAlignedItem.ts';
import { MusicSortFilterButton } from './classes/MusicSortFilterButton.ts';
import { MusicThumbnail } from './classes/MusicThumbnail.ts';
import { MusicTwoRowItem } from './classes/MusicTwoRowItem.ts';
import { MusicVisualHeader } from './classes/MusicVisualHeader.ts';
import { NavigationEndpoint } from './classes/NavigationEndpoint.ts';
import { Notification } from './classes/Notification.ts';
import { PageIntroduction } from './classes/PageIntroduction.ts';
import { PlayerAnnotationsExpanded } from './classes/PlayerAnnotationsExpanded.ts';
import { PlayerCaptionsTracklist } from './classes/PlayerCaptionsTracklist.ts';
import { PlayerErrorMessage } from './classes/PlayerErrorMessage.ts';
import { PlayerLiveStoryboardSpec } from './classes/PlayerLiveStoryboardSpec.ts';
import { PlayerMicroformat } from './classes/PlayerMicroformat.ts';
import { PlayerOverlay } from './classes/PlayerOverlay.ts';
import { PlayerOverlayAutoplay } from './classes/PlayerOverlayAutoplay.ts';
import { PlayerStoryboardSpec } from './classes/PlayerStoryboardSpec.ts';
import { Playlist } from './classes/Playlist.ts';
import { PlaylistHeader } from './classes/PlaylistHeader.ts';
import { PlaylistInfoCardContent } from './classes/PlaylistInfoCardContent.ts';
import { PlaylistMetadata } from './classes/PlaylistMetadata.ts';
import { PlaylistPanel } from './classes/PlaylistPanel.ts';
import { PlaylistPanelVideo } from './classes/PlaylistPanelVideo.ts';
import { PlaylistPanelVideoWrapper } from './classes/PlaylistPanelVideoWrapper.ts';
import { PlaylistSidebar } from './classes/PlaylistSidebar.ts';
import { PlaylistSidebarPrimaryInfo } from './classes/PlaylistSidebarPrimaryInfo.ts';
import { PlaylistSidebarSecondaryInfo } from './classes/PlaylistSidebarSecondaryInfo.ts';
import { PlaylistVideo } from './classes/PlaylistVideo.ts';
import { PlaylistVideoList } from './classes/PlaylistVideoList.ts';
import { PlaylistVideoThumbnail } from './classes/PlaylistVideoThumbnail.ts';
import { Poll } from './classes/Poll.ts';
import { Post } from './classes/Post.ts';
import { ProfileColumn } from './classes/ProfileColumn.ts';
import { ProfileColumnStats } from './classes/ProfileColumnStats.ts';
import { ProfileColumnStatsEntry } from './classes/ProfileColumnStatsEntry.ts';
import { ProfileColumnUserInfo } from './classes/ProfileColumnUserInfo.ts';
import { ReelItem } from './classes/ReelItem.ts';
import { ReelShelf } from './classes/ReelShelf.ts';
import { RelatedChipCloud } from './classes/RelatedChipCloud.ts';
import { RichGrid } from './classes/RichGrid.ts';
import { RichItem } from './classes/RichItem.ts';
import { RichListHeader } from './classes/RichListHeader.ts';
import { RichSection } from './classes/RichSection.ts';
import { RichShelf } from './classes/RichShelf.ts';
import { SearchBox } from './classes/SearchBox.ts';
import { SearchRefinementCard } from './classes/SearchRefinementCard.ts';
import { SearchSuggestion } from './classes/SearchSuggestion.ts';
import { SearchSuggestionsSection } from './classes/SearchSuggestionsSection.ts';
import { SecondarySearchContainer } from './classes/SecondarySearchContainer.ts';
import { SectionList } from './classes/SectionList.ts';
import { SegmentedLikeDislikeButton } from './classes/SegmentedLikeDislikeButton.ts';
import { SettingBoolean } from './classes/SettingBoolean.ts';
import { SettingsCheckbox } from './classes/SettingsCheckbox.ts';
import { SettingsOptions } from './classes/SettingsOptions.ts';
import { SettingsSidebar } from './classes/SettingsSidebar.ts';
import { SettingsSwitch } from './classes/SettingsSwitch.ts';
import { Shelf } from './classes/Shelf.ts';
import { ShowingResultsFor } from './classes/ShowingResultsFor.ts';
import { SimpleCardContent } from './classes/SimpleCardContent.ts';
import { SimpleCardTeaser } from './classes/SimpleCardTeaser.ts';
import { SimpleTextSection } from './classes/SimpleTextSection.ts';
import { SingleActionEmergencySupport } from './classes/SingleActionEmergencySupport.ts';
import { SingleColumnBrowseResults } from './classes/SingleColumnBrowseResults.ts';
import { SingleColumnMusicWatchNextResults } from './classes/SingleColumnMusicWatchNextResults.ts';
import { SingleHeroImage } from './classes/SingleHeroImage.ts';
import { SortFilterSubMenu } from './classes/SortFilterSubMenu.ts';
import { SubFeedOption } from './classes/SubFeedOption.ts';
import { SubFeedSelector } from './classes/SubFeedSelector.ts';
import { SubscribeButton } from './classes/SubscribeButton.ts';
import { SubscriptionNotificationToggleButton } from './classes/SubscriptionNotificationToggleButton.ts';
import { Tab } from './classes/Tab.ts';
import { Tabbed } from './classes/Tabbed.ts';
import { TabbedSearchResults } from './classes/TabbedSearchResults.ts';
import { TextHeader } from './classes/TextHeader.ts';
import { ThumbnailOverlayBottomPanel } from './classes/ThumbnailOverlayBottomPanel.ts';
import { ThumbnailOverlayEndorsement } from './classes/ThumbnailOverlayEndorsement.ts';
import { ThumbnailOverlayHoverText } from './classes/ThumbnailOverlayHoverText.ts';
import { ThumbnailOverlayInlineUnplayable } from './classes/ThumbnailOverlayInlineUnplayable.ts';
import { ThumbnailOverlayLoadingPreview } from './classes/ThumbnailOverlayLoadingPreview.ts';
import { ThumbnailOverlayNowPlaying } from './classes/ThumbnailOverlayNowPlaying.ts';
import { ThumbnailOverlayPinking } from './classes/ThumbnailOverlayPinking.ts';
import { ThumbnailOverlayPlaybackStatus } from './classes/ThumbnailOverlayPlaybackStatus.ts';
import { ThumbnailOverlayResumePlayback } from './classes/ThumbnailOverlayResumePlayback.ts';
import { ThumbnailOverlaySidePanel } from './classes/ThumbnailOverlaySidePanel.ts';
import { ThumbnailOverlayTimeStatus } from './classes/ThumbnailOverlayTimeStatus.ts';
import { ThumbnailOverlayToggleButton } from './classes/ThumbnailOverlayToggleButton.ts';
import { TitleAndButtonListHeader } from './classes/TitleAndButtonListHeader.ts';
import { ToggleButton } from './classes/ToggleButton.ts';
import { ToggleMenuServiceItem } from './classes/ToggleMenuServiceItem.ts';
import { Tooltip } from './classes/Tooltip.ts';
import { TwoColumnBrowseResults } from './classes/TwoColumnBrowseResults.ts';
import { TwoColumnSearchResults } from './classes/TwoColumnSearchResults.ts';
import { TwoColumnWatchNextResults } from './classes/TwoColumnWatchNextResults.ts';
import { UniversalWatchCard } from './classes/UniversalWatchCard.ts';
import { VerticalList } from './classes/VerticalList.ts';
import { VerticalWatchCardList } from './classes/VerticalWatchCardList.ts';
import { Video } from './classes/Video.ts';
import { VideoInfoCardContent } from './classes/VideoInfoCardContent.ts';
import { VideoOwner } from './classes/VideoOwner.ts';
import { VideoPrimaryInfo } from './classes/VideoPrimaryInfo.ts';
import { VideoSecondaryInfo } from './classes/VideoSecondaryInfo.ts';
import { WatchCardCompactVideo } from './classes/WatchCardCompactVideo.ts';
import { WatchCardHeroVideo } from './classes/WatchCardHeroVideo.ts';
import { WatchCardRichHeader } from './classes/WatchCardRichHeader.ts';
import { WatchCardSectionSequence } from './classes/WatchCardSectionSequence.ts';
import { WatchNextEndScreen } from './classes/WatchNextEndScreen.ts';
import { WatchNextTabbedResults } from './classes/WatchNextTabbedResults.ts';

const map: Record<string, YTNodeConstructor> = {
  AccountChannel,
  AccountItemSection,
  AccountItemSectionHeader,
  AccountSectionList,
  AppendContinuationItemsAction,
  OpenPopupAction,
  AnalyticsMainAppKeyMetrics,
  AnalyticsRoot,
  AnalyticsShortsCarouselCard,
  AnalyticsVideo,
  AnalyticsVodCarouselCard,
  CtaGoToCreatorStudio,
  DataModelSection,
  StatRow,
  AudioOnlyPlayability,
  AutomixPreviewVideo,
  BackstageImage,
  BackstagePost,
  BackstagePostThread,
  BrowseFeedActions,
  BrowserMediaSession,
  Button,
  C4TabbedHeader,
  CallToActionButton,
  Card,
  CardCollection,
  Channel,
  ChannelAboutFullMetadata,
  ChannelFeaturedContent,
  ChannelHeaderLinks,
  ChannelMetadata,
  ChannelMobileHeader,
  ChannelOptions,
  ChannelThumbnailWithLink,
  ChannelVideoPlayer,
  ChildVideo,
  ChipCloud,
  ChipCloudChip,
  CollaboratorInfoCardContent,
  CollageHeroImage,
  AuthorCommentBadge,
  Comment,
  CommentActionButtons,
  CommentReplies,
  CommentReplyDialog,
  CommentsEntryPointHeader,
  CommentsHeader,
  CommentSimplebox,
  CommentThread,
  CompactLink,
  CompactMix,
  CompactPlaylist,
  CompactVideo,
  ConfirmDialog,
  ContinuationItem,
  CopyLink,
  CreatePlaylistDialog,
  DidYouMean,
  DownloadButton,
  Dropdown,
  DropdownItem,
  Element,
  EmergencyOnebox,
  Endscreen,
  EndscreenElement,
  EndScreenPlaylist,
  EndScreenVideo,
  ExpandableTab,
  ExpandedShelfContents,
  FeedFilterChipBar,
  FeedTabbedHeader,
  Grid,
  GridChannel,
  GridHeader,
  GridPlaylist,
  GridVideo,
  HighlightsCarousel,
  HistorySuggestion,
  HorizontalCardList,
  HorizontalList,
  IconLink,
  ItemSection,
  ItemSectionHeader,
  ItemSectionTab,
  ItemSectionTabbedHeader,
  LikeButton,
  LiveChat,
  AddBannerToLiveChatCommand,
  AddChatItemAction,
  AddLiveChatTickerItemAction,
  LiveChatAutoModMessage,
  LiveChatBanner,
  LiveChatBannerHeader,
  LiveChatBannerPoll,
  LiveChatMembershipItem,
  LiveChatPaidMessage,
  LiveChatPaidSticker,
  LiveChatPlaceholderItem,
  LiveChatProductItem,
  LiveChatTextMessage,
  LiveChatTickerPaidMessageItem,
  LiveChatTickerSponsorItem,
  LiveChatViewerEngagementMessage,
  PollHeader,
  LiveChatActionPanel,
  MarkChatItemAsDeletedAction,
  MarkChatItemsByAuthorAsDeletedAction,
  RemoveBannerForLiveChatCommand,
  ReplaceChatItemAction,
  ReplayChatItemAction,
  ShowLiveChatActionPanelAction,
  ShowLiveChatTooltipCommand,
  UpdateDateTextAction,
  UpdateDescriptionAction,
  UpdateLiveChatPollAction,
  UpdateTitleAction,
  UpdateToggleButtonTextAction,
  UpdateViewershipAction,
  LiveChatAuthorBadge,
  LiveChatDialog,
  LiveChatHeader,
  LiveChatItemList,
  LiveChatMessageInput,
  LiveChatParticipant,
  LiveChatParticipantsList,
  Menu,
  MenuNavigationItem,
  MenuServiceItem,
  MenuServiceItemDownload,
  MultiPageMenu,
  MultiPageMenuNotificationSection,
  MusicMenuItemDivider,
  MusicMultiSelectMenu,
  MusicMultiSelectMenuItem,
  SimpleMenuHeader,
  MerchandiseItem,
  MerchandiseShelf,
  Message,
  MetadataBadge,
  MetadataRow,
  MetadataRowContainer,
  MetadataRowHeader,
  MetadataScreen,
  MicroformatData,
  Mix,
  Movie,
  MovingThumbnail,
  MusicCarouselShelf,
  MusicCarouselShelfBasicHeader,
  MusicDescriptionShelf,
  MusicDetailHeader,
  MusicDownloadStateBadge,
  MusicEditablePlaylistDetailHeader,
  MusicElementHeader,
  MusicHeader,
  MusicImmersiveHeader,
  MusicInlineBadge,
  MusicItemThumbnailOverlay,
  MusicLargeCardItemCarousel,
  MusicNavigationButton,
  MusicPlayButton,
  MusicPlaylistShelf,
  MusicQueue,
  MusicResponsiveListItem,
  MusicResponsiveListItemFixedColumn,
  MusicResponsiveListItemFlexColumn,
  MusicShelf,
  MusicSideAlignedItem,
  MusicSortFilterButton,
  MusicThumbnail,
  MusicTwoRowItem,
  MusicVisualHeader,
  NavigationEndpoint,
  Notification,
  PageIntroduction,
  PlayerAnnotationsExpanded,
  PlayerCaptionsTracklist,
  PlayerErrorMessage,
  PlayerLiveStoryboardSpec,
  PlayerMicroformat,
  PlayerOverlay,
  PlayerOverlayAutoplay,
  PlayerStoryboardSpec,
  Playlist,
  PlaylistHeader,
  PlaylistInfoCardContent,
  PlaylistMetadata,
  PlaylistPanel,
  PlaylistPanelVideo,
  PlaylistPanelVideoWrapper,
  PlaylistSidebar,
  PlaylistSidebarPrimaryInfo,
  PlaylistSidebarSecondaryInfo,
  PlaylistVideo,
  PlaylistVideoList,
  PlaylistVideoThumbnail,
  Poll,
  Post,
  ProfileColumn,
  ProfileColumnStats,
  ProfileColumnStatsEntry,
  ProfileColumnUserInfo,
  ReelItem,
  ReelShelf,
  RelatedChipCloud,
  RichGrid,
  RichItem,
  RichListHeader,
  RichSection,
  RichShelf,
  SearchBox,
  SearchRefinementCard,
  SearchSuggestion,
  SearchSuggestionsSection,
  SecondarySearchContainer,
  SectionList,
  SegmentedLikeDislikeButton,
  SettingBoolean,
  SettingsCheckbox,
  SettingsOptions,
  SettingsSidebar,
  SettingsSwitch,
  Shelf,
  ShowingResultsFor,
  SimpleCardContent,
  SimpleCardTeaser,
  SimpleTextSection,
  SingleActionEmergencySupport,
  SingleColumnBrowseResults,
  SingleColumnMusicWatchNextResults,
  SingleHeroImage,
  SortFilterSubMenu,
  SubFeedOption,
  SubFeedSelector,
  SubscribeButton,
  SubscriptionNotificationToggleButton,
  Tab,
  Tabbed,
  TabbedSearchResults,
  TextHeader,
  ThumbnailOverlayBottomPanel,
  ThumbnailOverlayEndorsement,
  ThumbnailOverlayHoverText,
  ThumbnailOverlayInlineUnplayable,
  ThumbnailOverlayLoadingPreview,
  ThumbnailOverlayNowPlaying,
  ThumbnailOverlayPinking,
  ThumbnailOverlayPlaybackStatus,
  ThumbnailOverlayResumePlayback,
  ThumbnailOverlaySidePanel,
  ThumbnailOverlayTimeStatus,
  ThumbnailOverlayToggleButton,
  TitleAndButtonListHeader,
  ToggleButton,
  ToggleMenuServiceItem,
  Tooltip,
  TwoColumnBrowseResults,
  TwoColumnSearchResults,
  TwoColumnWatchNextResults,
  UniversalWatchCard,
  VerticalList,
  VerticalWatchCardList,
  Video,
  VideoInfoCardContent,
  VideoOwner,
  VideoPrimaryInfo,
  VideoSecondaryInfo,
  WatchCardCompactVideo,
  WatchCardHeroVideo,
  WatchCardRichHeader,
  WatchCardSectionSequence,
  WatchNextEndScreen,
  WatchNextTabbedResults,
};

export const YTNodes = map;

/**
 * @param name - Name of the node to be parsed
 */
export function GetParserByName(name: string) {
  const ParserConstructor = map[name];

  if (!ParserConstructor) {
    const error = new Error(`Module not found: ${name}`);
    (error as any).code = 'MODULE_NOT_FOUND';
    throw error;
  }

  return ParserConstructor;
}
