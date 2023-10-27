import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-icon-button',
  templateUrl: './custom-icon-button.component.html',
  styleUrls: ['./custom-icon-button.component.scss']
})
export class CustomIconButtonComponent {

  @Input() onClick: () => void = () => { }
  @Input() title: string = ""



}
