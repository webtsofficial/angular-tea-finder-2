import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from './shared.module';
import {HomeComponent} from './components/sites/home/home.component';
import {IntroductionSpeechComponent} from './components/finder/speeches/introduction-speech/introduction-speech.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroductionSpeechComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
