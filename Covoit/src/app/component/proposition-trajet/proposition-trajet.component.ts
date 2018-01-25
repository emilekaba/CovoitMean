import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-proposition-trajet',
  templateUrl: './proposition-trajet.component.html',
  styleUrls: ['./proposition-trajet.component.css']
})
export class PropositionTrajetComponent implements OnInit {

    ville_depart: String;
    ville_arrivee: String;
    date_depart: String;
    adr_rdv: String;
    adr_depose: String;
    nbrPlaces: String;
    prix_trajet: String; 

  constructor(private flashMessage:FlashMessagesService,
    private authService:AuthService,private router: Router) { }

  ngOnInit() {
  }


    enregistrerTrajet(){
    const trajet = {
     ville_depart: this.ville_depart,
    ville_arrivee: this.ville_arrivee,
    date_depart: this.date_depart,
    adr_rdv: this.adr_rdv,
    adr_depose: this.adr_depose,
    nbrPlaces: this.nbrPlaces,
    prix_trajet: this.prix_trajet 
 
    }


    this.authService.registerTrajet(trajet).subscribe(data => {
      if(data.success){
        this.flashMessage.show('Trajet ajouté', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/connexion']);
      } else {
        this.flashMessage.show('Erreur, élément manquant', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/proposer-trajet']);
      }
    });  

}

}
