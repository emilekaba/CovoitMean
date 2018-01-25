import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {AjoutrajetService} from './services/ajoutrajet.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormArrComponent } from './components/home/form-arr/form-arr.component';
import { FormDateComponent } from './components/home/form-date/form-date.component';
import { FormDepComponent } from './components/home/form-dep/form-dep.component';
import { TopTrajetComponent } from './components/home/top-trajet/top-trajet.component';
import { SearchTrajetComponent } from './components/home/search-trajet/search-trajet.component';
import { PropositionTrajetComponent } from './components/proposition-trajet/proposition-trajet.component';
import { ListetrajetComponent } from './components/listetrajet/listetrajet.component';

const appRoutes: Routes =  [
  {path:'', component: HomeComponent},
  {path:'profile', component: ProfileComponent},
  {path:'connexion', component: ConnexionComponent},
  {path:'inscription', component: InscriptionComponent},
    {path:'proposer-trajet', component: PropositionTrajetComponent},
    {path:'listeTrajet', component: ListetrajetComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent,
    InscriptionComponent,
    AcceuilComponent,
    ConnexionComponent,
    MenuComponent,
    FooterComponent,
    FormArrComponent,
    FormDateComponent,
    FormDepComponent,
    TopTrajetComponent,
    SearchTrajetComponent,
    PropositionTrajetComponent,
    ListetrajetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthService, AjoutrajetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
