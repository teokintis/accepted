import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Store } from './store';
import { LeagueModule } from './league/league.module';
import { ShellModule } from './shell/shell.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeagueModule,
    ShellModule
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
