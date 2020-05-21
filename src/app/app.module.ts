import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SignupFormComponent } from './signup/signup-form.component'
import { Signup2FormComponent } from './signup2/signup2-form.component'
import { AlertComponent } from './alert/exe-alert.component'
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SignupFormComponent,
    Signup2FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFormModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AlertComponent],
})
export class AppModule { }
