import { BehaviorSubject, ReplaySubject, of, take } from 'rxjs';
import { HttpInteractionEffects } from './http-interaction.effect'
import { Action } from '@ngrx/store';
import { HttpService } from 'src/app/core/services/httpservice/http-service.service';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { IState } from '..';
import { responce } from 'src/app/utils/enums/mocks/mockedResponse'
import { getAllYoutubeItems, getYoutubeItems } from '../actions/youtube-items.actions';
import { ItemsManagementService } from 'src/app/core/services/item-management/items-management.service';
import { IItem } from 'src/app/models/common-item.model';

describe("Http effect testing", () => {

  let effect: HttpInteractionEffects;
  let actions$: ReplaySubject<Action>;
  let httpService: HttpService;
  let itemManagerService: ItemsManagementService;

  const initialState: IState = {
    customItems: [],
    favoriteItems: [],
    youtubeItems: [],
    pageTokens: {
      pageSize: 5,
      nextPageToken: undefined,
      previousPageToken: undefined,
    },
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpInteractionEffects,
        provideMockActions(() => actions$),
        provideMockStore({
          initialState
        }),
        {
          provide: HttpService,
          useValue: {
            getAll: jest.fn(() => of(responce))
          }
        },
        {
          provide: ItemsManagementService,
          useValue: {
            currentData: new BehaviorSubject({ searchWord: "test" })
          }
        }
      ],
    });
    effect = TestBed.inject(HttpInteractionEffects);
    httpService = TestBed.inject(HttpService);
    itemManagerService = TestBed.inject(ItemsManagementService)
    actions$ = new ReplaySubject()
  }));



  it('should be created', () => {
    expect(effect).toBeTruthy();
  });

  it('should be called right service method and correct result returned', async () => {
    actions$.next(getAllYoutubeItems({ direction: undefined }));
    effect.loadItems$.pipe(take(1)).subscribe((val) => {
      expect(val).toEqual(responce.items)
    })

    expect(httpService.getAll).toHaveBeenCalled();

  });
})

