import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PageTokensEffects } from './page-tokens.effects';

describe('PageTokensEffects', () => {
  let actions$: Observable<any>;
  let effects: PageTokensEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PageTokensEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(PageTokensEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
