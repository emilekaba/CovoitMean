import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service'
import {AuthService} from '../../services/auth.service'
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  
  username: String;
  genre: String;
  email: String;
  prenom: String;
  nom: String;
  age: String;
  adresse: String;
  tel: String;
  password: String;

  constructor(
    private validateService: ValidateService,
    private flashMessage:FlashMessagesService,
    private authService:AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      username: this.username,
  genre: this.genre,
  email: this.email,
  prenom: this.prenom,
  nom: this.nom,
  age: this.age,
  adresse: this.adresse,
  tel: this.tel,
  password: this.password
    }



    // Register user
    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
        this.flashMessage.show('Vous êtes maintenant connectés', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/connexion']);
      } else {
        this.flashMessage.show('Elément manquant', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/register']);
      }
    });

  }

}
