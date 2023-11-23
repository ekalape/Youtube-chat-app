import { getAllYoutubeItems, getOneItem, getOneYoutubeItem, getYoutubeItems } from './youtube-items.actions';
import { mockedItems } from 'src/app/utils/enums/mocks/mockedItems'

describe("Youtube-actions testing", () => {

  it('should create an action to get all youtube items', () => {
    const expectedGetAll = {
      type: getAllYoutubeItems.type
    };
    const expectedGetItems = {
      type: getYoutubeItems.type,
      items: []
    };
    const firstAction = getAllYoutubeItems({ direction: undefined });
    const secondAction = getYoutubeItems({ items: [] });
    expect(firstAction).toEqual(expectedGetAll);
    expect(secondAction).toEqual(expectedGetItems);

  });

  it('should create an action to get one youtube item', () => {
    const expectedFirstAction = {
      type: getOneItem.type,
      id: mockedItems[0].id
    }
    const expectedSecondAction = {
      type: getOneYoutubeItem.type,
      item: mockedItems[0]
    }
    const firstAction = getOneItem({ id: mockedItems[0].id });
    const secondAction = getOneYoutubeItem({ item: mockedItems[0] })

    expect(firstAction).toEqual(expectedFirstAction);
    expect(secondAction).toEqual(expectedSecondAction);


  });

})
