import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DemoInputComponent } from './components/demo-input/demo-input.component';
import { NumbersOnlyDirective } from './directive/numbers-only.directive';
import { HistoryComponent } from './components/history/history.component';
import { BullsCowsComponent } from './components/bulls-cows/bulls-cows.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoInputComponent,
    NumbersOnlyDirective,
    HistoryComponent,
    BullsCowsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
