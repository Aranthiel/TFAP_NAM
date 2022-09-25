import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadderComponent } from './components/headder/headder.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { SocialNetsComponent } from './components/social-nets/social-nets.component';
import { LinkedinComponent } from './components/linkedin/linkedin.component';
import { WspComponent } from './components/wsp/wsp.component';
import { TwitterComponent } from './components/twitter/twitter.component';
import { InstagramComponent } from './components/instagram/instagram.component';
import { FacebookComponent } from './components/facebook/facebook.component';
import { LogInComponent } from './components/btn-login/btn-login.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { BannerComponent } from './components/banner/banner.component';
import { NavComponent } from './components/nav/nav.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactPageComponent} from './pages/contactpage/contactpage.component';
import { RegisterComponent } from './pages/register/register.component';
import { HttpClientModule  } from '@angular/common/http';
import { HomePageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactformComponent } from './components/contactform/contactform.component';
import { GitHubComponent } from './components/git-hub/git-hub.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { Error404Component } from './pages/error404/error404.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadderComponent,
    LogoAPComponent,
    SocialNetsComponent,
    LinkedinComponent,
    WspComponent,
    TwitterComponent,
    InstagramComponent,
    FacebookComponent,
    LogInComponent,
    AboutComponent,
    ExperienciaComponent,
    EducacionComponent,
    BannerComponent,
    NavComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
    ContactPageComponent,
    RegisterComponent,
    HomePageComponent,
    LoginComponent,
    ContactformComponent,
    GitHubComponent,
    LoginFormComponent,
    Error404Component,
    RegisterFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
