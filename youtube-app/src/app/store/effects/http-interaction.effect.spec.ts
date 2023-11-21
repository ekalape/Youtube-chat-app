import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { Actions } from '@ngrx/effects';
import { HttpInteractionEffects } from './http-interaction.effect';

describe('HttpInteractionEffects', () => {
  let actions$: Observable<Actions>;
  let effects: HttpInteractionEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpInteractionEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(HttpInteractionEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
