import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ValidateNameDirective } from './validate-name.directive';
import { ValidatePhoneDirective } from './validate-phone.directive';

@NgModule({
  declarations: [
    AppComponent,
    ValidateNameDirective,
    ValidatePhoneDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
