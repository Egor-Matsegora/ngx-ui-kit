import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { NgxUiButtonComponent } from './components/ngx-ui-button';
import { NgxUiLoaderComponent } from './components/ngx-ui-loader';

@NgModule({
  declarations: [NgxUiButtonComponent, NgxUiLoaderComponent],
  imports: [BrowserModule],
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
