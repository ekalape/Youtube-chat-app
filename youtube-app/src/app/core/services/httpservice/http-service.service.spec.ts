import { HttpClient } from '@angular/common/http';
import { HttpService } from './http-service.service'
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IPageTokens } from 'src/app/store/models/page-tokens.model';

describe("Http-service testing", () => {
  let service: HttpService;
  let httpClient: HttpClient;
  const fakePageTokens: IPageTokens = {
    pageSize: 0,
    nextPageToken: undefined,
    previousPageToken: undefined
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService]
    });
    service = TestBed.inject(HttpService);
    httpClient = TestBed.inject(HttpClient)
  })

  it("should be created", () => {
    expect(service).toBeTruthy()
  })

  it("should send request", () => {
    const requestSpy = jest.spyOn(httpClient, "get");
    service.getAll(fakePageTokens, undefined, "test").subscribe();
    expect(requestSpy).toHaveBeenCalled()
  })
})
