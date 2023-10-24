export interface IResponce {
  TODO: string
  kind: string
  etag: string
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
  IItems: IItem[]
}

export interface IItem {
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
  ILocalized: ILocalized
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

export interface ILocalized {
  title: string
  description: string
}

export interface IStatistics {
  viewCount: string
  likeCount: string
  dislikeCount: string
  favoriteCount: string
  commentCount: string
}
