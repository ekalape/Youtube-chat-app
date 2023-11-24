import {
  BehaviorSubject, ReplaySubject, of, take,
} from 'rxjs';
import { Action } from '@ngrx/store';
import { HttpService } from 'src/app/core/services/httpservice/http-service.service';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { responce } from 'src/app/utils/enums/mocks/mockedResponse';
import { ItemsManagementService } from 'src/app/core/services/item-management/items-management.service';
import { mockedItems } from 'src/app/utils/enums/mocks/mockedItems';
import {
  getAllYoutubeItems, getOneItem, getOneYoutubeItem, getYoutubeItems,
} from '../actions/youtube-items.actions';
import { IState } from '..';
import { HttpInteractionEffects } from './http-interaction.effect';

describe('Http effect testing', () => {
  let effect: HttpInteractionEffects;
  let actions$: ReplaySubject<Action>;
  let httpService: HttpService;

  const initialState: IState = {
    customItems: [],
    favoriteItems: [],
    youtubeItems: [],
    pageTokens: {
      pageSize: 5,
      nextPageToken: undefined,
      previousPageToken: undefined,
    },
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpInteractionEffects,
        provideMockActions(() => actions$),
        provideMockStore({
          initialState,
        }),
        {
          provide: HttpService,
          useValue: {
            getAll: jest.fn(() => of(responce)),
            getById: jest.fn(() => of(mockedItems[0])),
          },
        },
        {
          provide: ItemsManagementService,
          useValue: {
            currentData: new BehaviorSubject({ searchWord: 'test' }),
          },
        },
      ],
    });
    effect = TestBed.inject(HttpInteractionEffects);
    httpService = TestBed.inject(HttpService);
    actions$ = new ReplaySubject();
  }));

  it('should be created', () => {
    expect(effect).toBeTruthy();
  });

  it('should be called getAll service method and correct result returned', (done) => {
    actions$.next(getAllYoutubeItems({ direction: undefined }));
    effect.loadItems$.pipe(take(1)).subscribe((val) => {
      expect(val).toEqual({ items: responce.items, type: getYoutubeItems.type });
      done();
    });
    expect(httpService.getAll).toHaveBeenCalled();
  });

  it('should be called getOneYoutubeItem action and correct result returned', (done) => {
    actions$.next(getOneItem({ id: mockedItems[0].id }));
    effect.loadOneItem$.pipe(take(1)).subscribe((val) => {
      expect(val).toEqual({ item: mockedItems[0], type: getOneYoutubeItem.type });
      done();
    });
    expect(httpService.getById).toHaveBeenCalled();
  });
});
