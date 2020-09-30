import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';

import { NgxUiButtonComponent } from './components/ngx-ui-button';
import { NgxUiLoaderComponent } from './components/ngx-ui-loader';
import { NgxUiShareComponent } from './components/ngx-ui-share/ngx-ui-share.component';
import { NgxUiFeedbackFormComponent } from './components/ngx-ui-feedback-form/ngx-ui-feedback-form.component';

@NgModule({
  declarations: [
    NgxUiButtonComponent,
    NgxUiLoaderComponent,
    AppComponent,
    NgxUiShareComponent,
    NgxUiFeedbackFormComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const button = createCustomElement(NgxUiButtonComponent, { injector: this.injector });
    customElements.define('ngx-ui-button', button);
    const loader = createCustomElement(NgxUiLoaderComponent, { injector: this.injector });
    customElements.define('ngx-ui-loader', loader);
  }
}
