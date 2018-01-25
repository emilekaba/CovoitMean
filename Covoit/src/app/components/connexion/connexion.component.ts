import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  username: String;
  password: String;

  constructor(
    private authService:AuthService,
    private router:Router,
    private flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    const user = {
      username: this.username,
      password: this.password
    }

    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success){
        this.authService.storeUserData(data.token, data.user);
        this.flashMessage.show('Vous êtes maintenant connecté', {
          cssClass: 'alert-success',
          timeout: 5000});
        this.router.navigate(['listeTrajet']);
      } else {
        this.flashMessage.show('Mot de passe ou adresse email invalide', {
          cssClass: 'alert-danger',
          timeout: 5000});
        this.router.navigate(['connexion']);
      }
    });
  }

}
