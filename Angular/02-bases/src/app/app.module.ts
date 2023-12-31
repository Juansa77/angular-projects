import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CounterModule } from './counter/components/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomePageComponent } from './gifs/pages/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomePageComponent

  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
