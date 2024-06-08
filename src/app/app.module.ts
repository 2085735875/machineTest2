import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentTaskComponent } from './student-task/student-task.component';
import { TabNgForComponent } from './tab-ng-for/tab-ng-for.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentTaskComponent,
    TabNgForComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
