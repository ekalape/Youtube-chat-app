import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
})
export class CustomButtonComponent {
  @Input() title = '';

  @Output() onClick = new EventEmitter()

  useClick() {
    this.onClick.emit()
  }
}
