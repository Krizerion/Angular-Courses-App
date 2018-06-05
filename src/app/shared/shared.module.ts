import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [SharedModule],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
