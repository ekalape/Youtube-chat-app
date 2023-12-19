import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IPageTokens } from 'src/app/store/models/page-tokens.model';
import { HttpService } from './http-service.service';

describe('Http-service testing', () => {
  let service: HttpService;
  let httpClient: HttpClient;
  const fakePageTokens: IPageTokens = {
    pageSize: 0,
    nextPageToken: undefined,
    previousPageToken: undefined,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService],

    });
    service = TestBed.inject(HttpService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send request to get all items', () => {
    const requestSpy = jest.spyOn(httpClient, 'get');
    service.getAll(fakePageTokens, undefined, 'test').subscribe();
    expect(requestSpy).toHaveBeenCalled();
  });

  it('should send request to get one item', () => {
    const requestSpy = jest.spyOn(httpClient, 'get');
    service.getById('cardId1').subscribe();
    expect(requestSpy).toHaveBeenCalled();
  });
});
