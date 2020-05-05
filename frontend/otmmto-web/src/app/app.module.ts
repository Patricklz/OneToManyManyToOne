import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutBaseComponent } from './components/layout-base/layout-base.component';
import { CadastrarUsuarioComponent } from './pages/cadastrar-usuario/cadastrar-usuario.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutInternoComponent } from './components/layout-interno/layout-interno.component';
import { MetasComponent } from './pages/metas/metas.component';
import { WizardComponent } from './pages/wizard/wizard.component';
import { NomeDesafioComponent } from './pages/wizard/nome-desafio/nome-desafio.component';
import { Valor1Component } from './pages/wizard/valor1/valor1.component';
import { Valor2Component } from './pages/wizard/valor2/valor2.component';
import { ParticipantesComponent } from './pages/wizard/participantes/participantes.component';
import { FimComponent } from './pages/wizard/fim/fim.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutBaseComponent,
    CadastrarUsuarioComponent,
    LayoutInternoComponent,
    MetasComponent,
    WizardComponent,
    NomeDesafioComponent,
    Valor1Component,
    Valor2Component,
    ParticipantesComponent,
    FimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
