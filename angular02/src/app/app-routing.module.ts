import { ReceberDadosComponent } from './receber-dados/receber-dados.component';
import { MaoDuplaComponent } from './mao-dupla/mao-dupla.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './event/event.component';
import { InicioComponent } from './inicio/inicio.component';
import { OutroComponent } from './outro/outro.component';
import { PaginaComponent } from './pagina/pagina.component';
import { PropertComponent } from './propert/propert.component';
import { EnviarComponent } from './enviar/enviar.component';
import { DiretivaIfComponent } from './diretiva-if/diretiva-if.component';
import { DiretivaForComponent } from './diretiva-for/diretiva-for.component';

const routes: Routes = [
  {path: "vaiPagina", component: PaginaComponent},
  {path: "", component: InicioComponent},
  {path: "outro", component: OutroComponent},
  {path: "propert", component: PropertComponent},
  {path: "event", component: EventComponent},
  {path: "mao-dupla", component: MaoDuplaComponent},
  {path: "receber/:info1/:dado2/:teste", component: ReceberDadosComponent},
  {path: "enviar", component: EnviarComponent},
  {path: "diretiva-if", component: DiretivaIfComponent},
  {path: "diretiva-for", component: DiretivaForComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
