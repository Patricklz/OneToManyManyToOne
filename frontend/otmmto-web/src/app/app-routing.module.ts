import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutBaseComponent } from './components/layout-base/layout-base.component';
import { CadastrarUsuarioComponent } from './pages/cadastrar-usuario/cadastrar-usuario.component';
import { LayoutInternoComponent } from './components/layout-interno/layout-interno.component';
import { MetasComponent } from './pages/metas/metas.component';
import { WizardComponent } from './pages/wizard/wizard.component';


const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home",
  },
  {
    path: "",
    component: LayoutBaseComponent,
    children: [
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "cadastrar-usuario",
        component: CadastrarUsuarioComponent
      },
    ],
  },
  {
    path: "",
    component: LayoutInternoComponent,
    children: [
      {
        path: "metas",
        component: MetasComponent
      },
      {
        path: "wizard",
        component: WizardComponent
      },
    ],
  },
  {
    path: "**",
    redirectTo: "home",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
