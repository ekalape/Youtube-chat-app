import { IYoutubeItem } from './youtube-item.model';

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
