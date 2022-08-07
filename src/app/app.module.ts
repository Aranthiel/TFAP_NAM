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
import { LogInComponent } from './components/log-in/log-in.component';
import { AboutComponent } from './components/about/about.component';

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
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
