import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: []
})
export class LayoutModule { }
