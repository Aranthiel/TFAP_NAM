import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { HomeComponent } from './components/home/home.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {    path:'', component: HomeComponent   },
  {    path:'registro', component: RegisterComponent   },
  {    path:'jobs', component: ExperienciaComponent   },
  {    path:'education', component: EducacionComponent   },
  {    path:'skills', component: HabilidadesComponent   },
  {    path:'proyects', component: ProyectosComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
