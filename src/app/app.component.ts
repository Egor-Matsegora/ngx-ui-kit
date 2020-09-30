import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ngx-ui-share [theme]="'dark'"></ngx-ui-share>
    <hr />
    <ngx-ui-feedback-form></ngx-ui-feedback-form>
  `,
})
export class AppComponent {}
