import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesService } from './course/courses.service';
import { CoursesComponent } from './courses.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  //Register in Providers all the dependencies for DI
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
