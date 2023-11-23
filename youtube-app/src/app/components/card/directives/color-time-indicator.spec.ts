import { Component, DebugElement } from '@angular/core'
import { ColorTimeIndicatorDirective } from './color-time-indicator.directive'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Seconds } from 'src/app/utils/enums/seconds'
import { By } from '@angular/platform-browser'
import { TimeDistanceColor } from 'src/app/utils/enums/colors'


@Component({
  standalone: true,
  template: `<div [appColorTimeIndicator]="oldiestDate"></div>
  <div  [appColorTimeIndicator]="oldDate"></div>
  <div [appColorTimeIndicator]="mediumDate"></div>
  <div [appColorTimeIndicator]="newDate"></div>
  `,
  imports: [ColorTimeIndicatorDirective],
})
class TestComponent {
  today = Date.now()
  oldiestDate = new Date(this.today - Seconds.halfYear * 1000).toString()
  oldDate = new Date(this.today - Seconds.month * 1000).toString()
  mediumDate = new Date(this.today - Seconds.week * 1000).toString()
  newDate = new Date(this.today - 10).toString()
}


describe("Color Indicator Directive testing", () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let testDivs: DebugElement[];

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [ColorTimeIndicatorDirective, TestComponent],
    }).createComponent(TestComponent);
    component = fixture.componentInstance;
    testDivs = fixture.debugElement.queryAll(By.css("div"));
    fixture.detectChanges();
  })


  it("should be 4 colored elements", () => {
    expect(testDivs.length).toBe(4)

  })

  it("should be correct colors", () => {
    expect(testDivs[0].nativeElement.style.backgroundColor).toBe(TimeDistanceColor.OLDIEST);
    expect(testDivs[1].nativeElement.style.backgroundColor).toBe(TimeDistanceColor.OLD);
    expect(testDivs[2].nativeElement.style.backgroundColor).toBe(TimeDistanceColor.MEDIUM);
    expect(testDivs[3].nativeElement.style.backgroundColor).toBe(TimeDistanceColor.NEW);

  })




})
