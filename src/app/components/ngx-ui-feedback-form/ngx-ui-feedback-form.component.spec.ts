import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxUiFeedbackFormComponent } from './ngx-ui-feedback-form.component';

describe('NgxUiFeedbackFormComponent', () => {
  let component: NgxUiFeedbackFormComponent;
  let fixture: ComponentFixture<NgxUiFeedbackFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxUiFeedbackFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxUiFeedbackFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
