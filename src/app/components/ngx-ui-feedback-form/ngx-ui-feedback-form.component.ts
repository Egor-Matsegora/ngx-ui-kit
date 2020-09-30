import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ButtonLocation, FeedbackFormInterface, UiTheme } from 'src/app/interfaces/theme.interfaces';

import * as uuid from 'uuid';

@Component({
  selector: 'ngx-ui-feedback-form',
  templateUrl: './ngx-ui-feedback-form.component.html',
  styleUrls: ['./ngx-ui-feedback-form.component.sass'],
})
export class NgxUiFeedbackFormComponent implements OnInit {
  @Input() theme: UiTheme = 'dark';
  @Input() name: string;
  @Input() email: string;
  @Input() isOpen: boolean = false;
  @Input() title: string = 'Leave a message';
  @Input() buttonLocation: ButtonLocation = 'left';

  @Output() opened = new EventEmitter();
  @Output() closed = new EventEmitter();
  @Output() submited: EventEmitter<FeedbackFormInterface> = new EventEmitter();
  @Output() errors: any = new EventEmitter();

  feedbackForm: FormGroup;
  emailControl: FormControl;
  nameControl: FormControl;
  messageControl: FormControl;

  nameId: string;
  emailId: string;
  messageId: string;

  constructor(private fBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.initVariables();
    this.generateUUIDs();
  }

  toggleForm() {
    if (this.isOpen) {
      this.closeForm();
    } else {
      this.openForm();
    }
  }

  closeForm() {
    this.resetForm();
    this.isOpen = false;
    this.closed.emit();
  }

  openForm() {
    this.isOpen = true;
    this.opened.emit();
  }

  updateForm(name: string, email: string) {
    if (!this.feedbackForm) return;
    this.nameControl.setValue(name);
    this.emailControl.setValue(email);
    this.feedbackForm.updateValueAndValidity();
  }

  onSubmit() {
    if (this.feedbackForm.invalid) {
      const errors = this.feedbackForm.errors;
      this.errors.emit(errors);
    } else {
      const value: FeedbackFormInterface = this.feedbackForm.value;
      this.closeForm();
      this.submited.emit(value);
    }
  }

  resetForm() {
    this.feedbackForm.reset();
  }

  private initForm() {
    this.feedbackForm = this.fBuilder.group({
      name: this.name,
      email: [this.email, [Validators.required, Validators.email]],
      message: '',
    });
  }

  private initVariables() {
    this.nameControl = this.feedbackForm.get('name') as FormControl;
    this.emailControl = this.feedbackForm.get('email') as FormControl;
    this.messageControl = this.feedbackForm.get('message') as FormControl;
  }

  private generateUUIDs() {
    this.nameId = uuid.v4();
    this.emailId = uuid.v4();
    this.messageId = uuid.v4();
  }
}
