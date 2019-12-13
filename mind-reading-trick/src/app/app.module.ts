import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HowtoComponent } from './howto/howto.component';
import { PlayComponent } from './play/play.component';
import { HeaderComponent } from './header/header.component';
import { EndComponent } from './end/end.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HowtoComponent,
    PlayComponent,
    HeaderComponent,
    EndComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
