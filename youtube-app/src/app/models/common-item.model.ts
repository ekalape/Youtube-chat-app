import { IThumbnails } from './youtube-item.model';

export interface IItem {
  id: string,
  custom?: boolean;
  title: string,
  description: string,
  imageLinks: IThumbnails,
  videoLink: string,
  createdAt: string,
  tags: string[],
  statistics: {
    views: string,
    likes: string,
    dislikes: string,
    comments: string
  }
}
