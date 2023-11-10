import { IYoutubeItem } from 'src/app/models/youtube-item.model';
import { ICustomCard } from './custom-card.model';

export interface ICustomCardState {
  customItems: ICustomCard[],
}
export const customCardInitialState: ICustomCardState = {
  customItems: [{
    id: 1,
    title: "string",
    imageLink: "string",
    videoLink: "string",
    description: "string",
    createdAt: "string",
    tags: ["baba", "luba"],
  }]
}
