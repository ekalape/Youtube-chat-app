import { TestBed } from '@angular/core/testing';

import { YoutubeHttpInterceptor } from './youtube-http.interceptor';

describe('YoutubeHttpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      YoutubeHttpInterceptor,
    ],
  }));

  it('should be created', () => {
    const interceptor: YoutubeHttpInterceptor = TestBed.inject(YoutubeHttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
