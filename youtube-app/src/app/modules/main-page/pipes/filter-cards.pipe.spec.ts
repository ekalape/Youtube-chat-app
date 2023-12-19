import { SortingRule } from 'src/app/utils/enums/sorting-rules';
import { mockedItems } from 'src/app/utils/enums/mocks/mockedItems';
import { FilterCardsPipe } from './filter-cards.pipe';

describe('Filter and sorting pipe testing', () => {
  const pipe = new FilterCardsPipe();

  it('should filter by word', () => {
    const filterWord = 'crash';
    const sorting = SortingRule.DATE_DOWN;
    expect(pipe.transform(mockedItems, filterWord, sorting).length).toBe(1);
  });

  it('should return same array of cards if filter word is empty', () => {
    const filterWord = '   ';
    const sorting = SortingRule.DATE_DOWN;
    expect(pipe.transform(mockedItems, filterWord, sorting)).toEqual(mockedItems);
  });

  it('should return empty array if null is provided instead of source array', () => {
    const filterWord = '   ';
    const sorting = SortingRule.DATE_DOWN;
    expect(pipe.transform(null, filterWord, sorting)).toEqual([]);
  });
});
