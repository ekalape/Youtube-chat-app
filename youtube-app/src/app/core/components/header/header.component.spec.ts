import { StoreModule } from '@ngrx/store';
import { CoreModule } from '../../core.module';
import { HeaderComponent } from './header.component'
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { metaReducers, reducers } from 'src/app/store';
import { AuthService } from '../../services/authentification/auth.service';
import { of, take } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomButtonComponent } from 'src/app/components/custom-button/custom-button.component';
import { By } from '@angular/platform-browser';


describe('Header testing', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let authServiceStub: Partial<AuthService> = { isLogged: true, username: of("TestName") };
  let authService: AuthService



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        CoreModule,
        BrowserAnimationsModule,
        StoreModule.forRoot(reducers, {
          metaReducers,
        }),],
      providers: [
        { provide: AuthService, useValue: authServiceStub }
      ]
    }).compileComponents();
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService)
    fixture.detectChanges();
  })


  it("should display search elements if logged in", () => {
    const searchElements = fixture.nativeElement.querySelector('.center-part');
    expect(searchElements).toBeDefined();

  })

  it("should not display search elements if logged out", () => {
    authService.isLogged = false
    fixture.detectChanges();
    const searchElements = fixture.nativeElement.querySelector('.center-part');
    const adminIcon = fixture.nativeElement.querySelector('.admin-icon');
    expect(searchElements).toBeNull();
    expect(adminIcon).toBeNull();
  })

  it("should login info block and correct name if logged in", () => {
    authService.isLogged = true;
    const loginInfoBlock = fixture.nativeElement.querySelector('app-login-info-block') as HTMLDivElement;
    expect(loginInfoBlock).toBeDefined();
    authService.username.pipe(take(1)).subscribe((value) => {
      expect(loginInfoBlock.textContent).toBe(value)
    })
  })

  it("should open/close filters block", () => {
    authService.isLogged = true;
    const customBtnDe = fixture.debugElement.query(By.css('app-custom-button[title="Open filters block"]')).componentInstance as CustomButtonComponent;
    const spyOnFiltersOpenFn = jest.spyOn(component, 'openFiltersBlock');

    customBtnDe.useClick()

    fixture.detectChanges();

    expect(spyOnFiltersOpenFn).toHaveBeenCalled();

    const filtersPart = fixture.nativeElement.querySelector('.header-sorting-row') as HTMLDivElement;

    expect(component.filtersOpened).toBe(true);
    expect(filtersPart).toBeDefined();


  })

})


