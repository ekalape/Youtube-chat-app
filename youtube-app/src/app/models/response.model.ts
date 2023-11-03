import { IRawYoutubeItem, IYoutubeItem } from './youtube-item.model';

export interface ISearchResponce {
  TODO: string
  kind: string
  etag: string
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
  items: IRawYoutubeItem[]
}
export interface IResponce {
  TODO: string
  kind: string
  etag: string
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
  items: IYoutubeItem[]
}
