import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragulaModule } from 'ng2-dragula'


import { AppComponent } from './app.component';
import { ExampleAComponent, ExampleBComponent } from './examples';


@NgModule({
  declarations: [
    AppComponent,
    ExampleAComponent,
    ExampleBComponent
  ],
  imports: [
    BrowserModule,
    DragulaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
