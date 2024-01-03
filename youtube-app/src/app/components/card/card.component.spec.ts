import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { provideRouter } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { mockedItems } from 'src/app/utils/enums/mocks/mockedItems';
import { By } from '@angular/platform-browser';
import { AddToFavorite, RemoveFromFavorite } from 'src/app/store/actions/favorites.actions';
import { ColorTimeIndicatorDirective } from './directives/color-time-indicator.directive';
import { CardComponent } from './card.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('Card testing', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let store: MockStore<{ favoriteItems: string[] }>;
  const initialState = { favoriteItems: [] };
  let favBtn: HTMLButtonElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [
        CardComponent,
      ],
      providers: [
        provideMockStore({ initialState }),
        provideRouter([
        ]),

      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    store = TestBed.inject(MockStore);

    jest.spyOn(store, 'dispatch');

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.cardData = mockedItems[0];
    fixture.detectChanges();
    favBtn = fixture.debugElement.query(By.css('button[aria-label="favoriteButton"]'))
      .nativeElement as HTMLButtonElement;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('store.dispatch with correct action should be called', () => {
    expect(favBtn.textContent).toBe(' Add to favorite');
    component.addToFavorite();
    fixture.detectChanges();
    expect(store.dispatch).toHaveBeenCalledWith(AddToFavorite({ cardId: mockedItems[0].id }));

  });
  it('favorite property should be true', () => {
    expect(favBtn.textContent).toBe(' Add to favorite');
    component.addToFavorite();
    fixture.detectChanges();
    expect(component.favorite).toBe(true);

  });
  it('button text should be "Favorite" after calling "add to favorites"', () => {
    expect(favBtn.textContent).toBe(' Add to favorite');
    component.addToFavorite();
    fixture.detectChanges();
    expect(favBtn.textContent).toBe(' Favorite');
  });

  it('should be removed from favorites', () => {
    component.addToFavorite();
    fixture.detectChanges();
    component.removeFromFavorite();
    fixture.detectChanges();
    expect(store.dispatch).toHaveBeenCalledWith(RemoveFromFavorite({ cardId: mockedItems[0].id }));

  });
  it('button text should be "Add to favorite" after calling "remove from favorites"', () => {
    component.addToFavorite();
    fixture.detectChanges();
    component.removeFromFavorite();
    fixture.detectChanges();
    expect(favBtn.textContent).toBe(' Add to favorite');
  });
});
