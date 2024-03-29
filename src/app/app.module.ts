import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { GameComponent } from './game/game.component';
import { PlayComponent } from './play/play.component';
import{ ReactiveFormsModule, FormsModule } from'@angular/forms';
import{ HttpClientModule } from'@angular/common/http';



@NgModule({
 declarations: [
  AppComponent,
  GameComponent,
  PlayComponent
 ],

 imports: [
  BrowserModule,
  AppRoutingModule,
  ReactiveFormsModule,
  FormsModule,
  HttpClientModule
 ],

 providers: [],
 bootstrap: [AppComponent]
})

export class AppModule { }