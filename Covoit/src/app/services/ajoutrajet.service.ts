import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map' ;



@Injectable()
export class AjoutrajetService {

  constructor(private http: Http) { }

getTrajet() {
   let observable: Observable<any> = this.http.get("http://localhost:3000/trajets/trajetlist").map((res:Response) => res.json());
   return observable;
}	

getTraj(){
return this.http.get('http://localhost:3000/trajets/trajetlist').map((res)=>{
console.log(res);
return res.json();});
}


  validateTrajet(trajet){
    if(trajet.ville_depart == undefined || trajet.ville_arrivee == undefined || trajet.date_depart == undefined || trajet.adr_rdv == undefined || trajet.adr_depose == undefined || trajet.nbrPlaces == undefined || trajet.prix_trajet == undefined){
      return false;
    } else {
      return true;
    }
  }

}
