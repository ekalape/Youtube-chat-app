import {
  AfterViewInit, Directive, ElementRef, Input, Renderer2,
} from '@angular/core';
import { TimeDistanceColor } from 'src/app/utils/enums';

@Directive({
  selector: '[appColorTimeIndicator]',
  standalone: true,
})
export class ColorTimeIndicatorDirective implements AfterViewInit {
  @Input('appColorTimeIndicator') publishedAt: string | undefined;

  @Input() hasShadow = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {

  }

  ngAfterViewInit() {
    if (this.hasShadow) {
      this.renderer
        .setStyle(
          this.elementRef.nativeElement,
          'box-shadow',
          `15px 15px 20px 0 color-mix(in srgb, ${this.setColorIndicator()} 50%, black)`,
        );
    } else {
      this.renderer
        .setStyle(this.elementRef.nativeElement, 'background-color', this.setColorIndicator());
    }
  }

  private setColorIndicator() {
    if (this.publishedAt) {
      let timeDiff = 0;
      timeDiff = (Date.now() - Date.parse(this.publishedAt)) / 1000;
      if (timeDiff < 604800) return TimeDistanceColor.NEW;
      if (timeDiff >= 604800 && timeDiff < 2592000) return TimeDistanceColor.MEDIUM;
      if (timeDiff >= 2592000 && timeDiff < 15552000) return TimeDistanceColor.OLD;
      return TimeDistanceColor.OLDIEST;
    }
    return TimeDistanceColor.NEW;
  }
}
