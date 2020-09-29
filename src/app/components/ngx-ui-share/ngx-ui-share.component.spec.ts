import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxUiShareComponent } from './ngx-ui-share.component';

describe('NgxUiShareComponent', () => {
  let component: NgxUiShareComponent;
  let fixture: ComponentFixture<NgxUiShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxUiShareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxUiShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
