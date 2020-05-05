import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutBaseComponent } from './components/layout-base/layout-base.component';
import { CadastrarUsuarioComponent } from './pages/cadastrar-usuario/cadastrar-usuario.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutInternoComponent } from './components/layout-interno/layout-interno.component';
import { MetasComponent } from './pages/metas/metas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutBaseComponent,
    CadastrarUsuarioComponent,
    LayoutInternoComponent,
    MetasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
