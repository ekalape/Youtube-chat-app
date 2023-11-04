import { Component } from '@angular/core';
import { FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-card-form',
  templateUrl: './create-card-form.component.html',
  styleUrls: ['./create-card-form.component.scss']
})
export class CreateCardFormComponent {
  loginForm: FormGroup = this.fb.group({ // TODO to change
    nameInput: ["", Validators.required],
    passInput: [""],
    tags: this.fb.array([
    ])
  })
  get tags() {
    return this.loginForm.get("tags") as FormArray
  }

  constructor(private fb: FormBuilder) { }
  addTag() {
    this.tags.push(this.fb.control(""))
    console.log(this.loginForm.controls);
  }

}
