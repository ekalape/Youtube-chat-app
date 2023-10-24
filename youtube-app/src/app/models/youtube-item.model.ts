export interface IYoutubeItem {
  kind: string
  etag: string
  id: string
  ISnippet: ISnippet
  IStatistics: IStatistics
}

export interface ISnippet {
  publishedAt: string
  channelId: string
  title: string
  description: string
  IThumbnails: IThumbnails
  channelTitle: string
  tags: string[]
  categoryId: string
  liveBroadcastContent: string
  ILocalized: {
    title: string
    description: string
  }
  defaultAudioLanguage: string
}

export interface IThumbnails {
  default: IThumbDetails
  medium: IThumbDetails
  high: IThumbDetails
  standard: IThumbDetails
  maxres: IThumbDetails
}

export interface IThumbDetails {
  url: string
  width: number
  height: number
}

export interface IStatistics {
  viewCount: string
  likeCount: string
  dislikeCount: string
  favoriteCount: string
  commentCount: string
}
