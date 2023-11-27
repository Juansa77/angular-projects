import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

const routes: Routes = [
  {
    //*Cargando las rutas del módulo auth
    path:"auth",
    loadChildren:() =>import('./auth/auth.module').then(m =>m.AuthModule)
  },
  {
    //*Cargando las rutas del módulo heroes
    path:"heroes",
    loadChildren:() =>import('./heroes/heroes.module').then(m =>m.HeroesModule)
  },

  {
    //*Cargando las rutas de la página 404
    path:"404",
    component: Error404PageComponent
  },
  //*Ruta inicial
  {
    path:"",
    redirectTo:"heroes",
    pathMatch:"full"
  },
  {
    path:"**",
    redirectTo:"404"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
