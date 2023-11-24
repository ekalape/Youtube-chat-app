import { AddToFavorite, RemoveFromFavorite } from '../actions/favorites.actions';
import { favoriteReducer } from './favorites.reducer';

describe('Favorite items reducers testing', () => {
  const initialState: string[] = [];

  let store: string[];

  it('should add favorite item', () => {
    store = favoriteReducer(initialState, AddToFavorite({ cardId: 'cardID1' }));
    store = favoriteReducer(store, AddToFavorite({ cardId: 'cardID2' }));
    expect(store.length).toBe(2);
  });

  it('should delete an item from favorites', () => {
    store = favoriteReducer(store, RemoveFromFavorite({ cardId: 'cardID1' }));
    expect(store.length).toBe(1);
    expect(store[0]).toBe('cardID2');
  });
});
