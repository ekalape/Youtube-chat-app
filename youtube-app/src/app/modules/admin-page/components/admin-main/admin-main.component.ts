import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.scss']
})
export class AdminMainComponent {

  formSubmitted = false;

  submitForm(data: FormGroup) {
    console.log(data);
    this.formSubmitted = true
  }

}
