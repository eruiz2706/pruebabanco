import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlotaComponent } from './pages/flota/flota.component';
import { HeaderComponent } from './pages/flota/components/header/header.component';
import { FooterComponent } from './pages/flota/components/footer/footer.component';
import { OptioncardComponent } from './pages/flota/components/optioncard/optioncard.component';
import { AlertComponent } from './pages/flota/components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    FlotaComponent,
    HeaderComponent,
    FooterComponent,
    OptioncardComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
