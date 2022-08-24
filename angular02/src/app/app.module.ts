import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaComponent } from './pagina/pagina.component';
import { OutroComponent } from './outro/outro.component';
import { InicioComponent } from './inicio/inicio.component';
import { PropertComponent } from './propert/propert.component';
import { EventComponent } from './event/event.component';
import { FormsModule } from '@angular/forms';
import { MaoDuplaComponent } from './mao-dupla/mao-dupla.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaComponent,
    OutroComponent,
    InicioComponent,
    PropertComponent,
    EventComponent,
    MaoDuplaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
