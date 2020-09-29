import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxUiButtonComponent } from './components/ngx-ui-button';
import { NgxUiLoaderComponent } from './components/ngx-ui-loader';

@NgModule({
  declarations: [AppComponent, NgxUiButtonComponent, NgxUiLoaderComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
