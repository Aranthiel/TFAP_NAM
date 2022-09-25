import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { HomePageComponent } from './pages/homepage/homepage.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactPageComponent} from './pages/contactpage/contactpage.component'
import { Error404Component } from './pages/error404/error404.component';

const routes: Routes = [
  {    path:'', component: HomePageComponent   },
  {    path:'login', component: LoginComponent   },
  {    path:'registro', component: RegisterComponent   },
  {    path:'404', component: Error404Component  },
  {    path:'contact', component: ContactPageComponent   }

  /* {    path:'jobs', component: ExperienciaComponent   },
  {    path:'education', component: EducacionComponent   },
  {    path:'skills', component: HabilidadesComponent   },
  {    path:'proyects', component: ProyectosComponent  } */


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
