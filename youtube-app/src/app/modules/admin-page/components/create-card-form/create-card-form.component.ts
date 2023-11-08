import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormGroup, Validators, FormArray, FormBuilder, FormControl,
} from '@angular/forms';
import { DateValidator } from 'src/app/core/directives/date-validator.directive';

@Component({
  selector: 'app-create-card-form',
  templateUrl: './create-card-form.component.html',
  styleUrls: ['./create-card-form.component.scss'],
})
export class CreateCardFormComponent {
  addTagDisable = false;

  removeTagDisable = true;

  @Output() submitEvent = new EventEmitter();

  cardCreationForm: FormGroup = this.fb.group({ // TODO to change
    title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    description: ['', Validators.maxLength(255)],
    imageLink: ['', Validators.required],
    videoLink: ['', Validators.required],
    createdAt: ['', [Validators.required, DateValidator()]],
    tags: this.fb.array([
      this.fb.control('', Validators.required),
    ]),
  });

  get title() {
    return this.cardCreationForm.get('title') as FormControl;
  }

  get description() {
    return this.cardCreationForm.get('description') as FormControl;
  }

  get imageLink() {
    return this.cardCreationForm.get('imageLink') as FormControl;
  }

  get videoLink() {
    return this.cardCreationForm.get('videoLink') as FormControl;
  }

  get createdAt() {
    return this.cardCreationForm.get('createdAt') as FormControl;
  }

  get tags() {
    return this.cardCreationForm.get('tags') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  addTag() {
    this.removeTagDisable = false;
    if (this.tags.length < 5) {
      this.tags.push(this.fb.control('', Validators.required));
      if (this.tags.length === 5) this.addTagDisable = true;
    }
  }

  removeTag() {
    if (this.tags.length > 1) {
      this.tags.removeAt(this.tags.length - 1);
      if (this.tags.length <= 1) this.removeTagDisable = true;
    }
    if (this.tags.length < 5) this.addTagDisable = false;
  }

  onSubmit() {
    this.submitEvent.emit(this.cardCreationForm.value);
    console.log('Submitted');
    this.onReset();
  }

  onReset() {
    this.tags.clear();
    this.addTag();
    this.removeTagDisable = true;
    this.cardCreationForm.reset();
    this.cardCreationForm.markAsUntouched();
  }
}
