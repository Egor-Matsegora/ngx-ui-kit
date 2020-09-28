import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxUiButtonComponent } from './ngx-ui-button.component';

describe('NgxUiButtonComponent', () => {
  let component: NgxUiButtonComponent;
  let fixture: ComponentFixture<NgxUiButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxUiButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxUiButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
