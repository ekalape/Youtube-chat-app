
import { oneItemSelector, selectFavoriteItems, selectYoutubeItems } from './items.selector';
import { mockedItems } from 'src/app/utils/enums/mocks/mockedItems'
import { IStoredItem } from '../models/store.model';

describe('Items selectors testing', () => {

  const youtubeItems: IStoredItem[] = [
    {
      id: mockedItems[0].id,
      item: mockedItems[0]
    },
    {
      id: mockedItems[1].id,
      item: mockedItems[1]
    },
  ]

  const favoriteIds: string[] = [mockedItems[0].id]

  it('should select all youtube items', () => {
    expect(selectYoutubeItems.projector(mockedItems)).toEqual(mockedItems);
  });


  it('should select one item correctly', () => {
    const selectItem = oneItemSelector(mockedItems[0].id)
    expect(selectItem.projector(youtubeItems)).toEqual(mockedItems[0]);
  });

  it('should return favorite items', () => {
    expect(selectFavoriteItems.projector(youtubeItems, favoriteIds)).toEqual([mockedItems[0]])

  });


});
