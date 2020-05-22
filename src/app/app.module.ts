import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Components
import { AppComponent }  from './app.component';
import { CompleteComponent } from './components/complete.component';
import { CheckedPipe } from './pipes/checked.Pipe';


@NgModule({
  imports:      [ BrowserModule , FormsModule , ReactiveFormsModule],
  declarations: [
    AppComponent,
    CompleteComponent,
   CheckedPipe
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
