
import { getOneYoutubeItem, getYoutubeItems } from '../actions/youtube-items.actions';
import { IStoredItem } from '../models/store.model';
import { youtubeItemsReducer } from './youtube-items.reducer';
import { mockedItems } from 'src/app/utils/enums/mocks/mockedItems'

describe("Youtube items reducers testing", () => {

  const expected = [
    {
      id: mockedItems[0].id,
      item: mockedItems[0]
    },
    {
      id: mockedItems[1].id,
      item: mockedItems[1]
    },
  ]
  const storedItems: IStoredItem[] = []

  let initialState: IStoredItem[];

  beforeEach(() => {
    initialState = [...storedItems]
  })

  it("should change state after calling getYoutubeItems action", () => {
    const result = youtubeItemsReducer(initialState, getYoutubeItems({ items: mockedItems }))

    expect(result).toEqual(expected)
  })
  it("should return correct item after calling getOneYoutubeItem action", () => {

    const result = youtubeItemsReducer(initialState, getOneYoutubeItem({ item: mockedItems[0] }))
    expect(result).toEqual([expected[0]])
  })




})
