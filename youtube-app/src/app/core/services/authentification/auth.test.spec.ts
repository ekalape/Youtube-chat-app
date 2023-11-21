import { AuthService } from './auth.service';
import { lastValueFrom, map, take } from 'rxjs';


describe('AuthService test', () => {

  let service: AuthService;
  const name = "TestName";

  beforeEach(() => {
    service = new AuthService;
  })

  it('Service should be created', () => {
    expect(service).toBeTruthy()
  })

  it('Should login successfully', async () => {
    service.login(name)
    expect(service.isLogged).toBeTruthy()
    service.username.pipe(
      take(1),
      map((value) => {
        console.log("value -->", value);
        expect(value).toBe(name)
      }
      ))

  })
  it('Should logout successfully', () => {
    service.logout()
    expect(service.isLogged).toBeFalsy()
  })


})
