import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-demo-input',
  templateUrl: './demo-input.component.html',
  styleUrls: ['./demo-input.component.scss'],
})
export class DemoInputComponent implements OnInit {
  @Output() userData = new EventEmitter<string>();
  @Output() resetData = new EventEmitter<boolean>();
  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      userValue: [
        '',
        [Validators.required, this.uniqueDigitValidator.bind(this)],
      ],
    });
  }

  uniqueDigitValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    if (control.value) {
      const enteredNumber: number = control.value;
      if (enteredNumber.toString().length == 4) {
        if (new Set(enteredNumber.toString()).size != 4) {
          return { notUnique: true };
        }
      }
    }
    return null;
  }

  updateValue() {
    if (this.userValueControl.value)
      this.userData.emit(this.userValueControl.value);
      this.formGroup.reset();
  }

  resetForm() {
    this.formGroup.reset();
    this.resetData.emit(true);
  }

  get userValueControl() {
    return this.formGroup.get('userValue');
  }
}
