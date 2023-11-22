import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//* Configuración locale de la APP
import localeEsEA from '@angular/common/locales/es-EA';
import localeFrCA from '@angular/common/locales/fr-CA';
import localeEnGB from '@angular/common/locales/en-GB';
import { registerLocaleData } from '@angular/common';

//* Función importada para registrar el local
registerLocaleData(localeEsEA);
registerLocaleData(localeFrCA);
registerLocaleData(localeEnGB);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-EA',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
