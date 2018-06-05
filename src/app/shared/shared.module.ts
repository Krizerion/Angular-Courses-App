import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [
    LogoComponent
  ],
  exports: [LogoComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
