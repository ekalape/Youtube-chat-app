import { take } from 'rxjs';
import { AuthService } from './auth.service';

describe('AuthService test', () => {
  let service: AuthService;
  const name = 'TestName';

  beforeEach(() => {
    service = new AuthService();
  });

  it('Service should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should login successfully', (done) => {
    service.login(name);
    expect(service.isLogged).toBeTruthy();
    service.username.pipe(
      take(1),
    ).subscribe((value) => {
      expect(value).toBe(name);
      done();
    });
  });
  it('Should logout successfully', () => {
    service.logout();
    expect(service.isLogged).toBeFalsy();
  });
});
