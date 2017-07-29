import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { BattlefieldComponent } from './battlefield/battlefield.component';

import {BattleService} from './battlefield/battle.service';

@NgModule({
  declarations: [
    AppComponent,
    BattlefieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [BattleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
