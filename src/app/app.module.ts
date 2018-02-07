import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragulaModule } from 'ng2-dragula'


import { AppComponent } from './app.component';
import { ExampleAComponent } from './examples';


@NgModule({
  declarations: [
    AppComponent,
    ExampleAComponent
  ],
  imports: [
    BrowserModule,
    DragulaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
