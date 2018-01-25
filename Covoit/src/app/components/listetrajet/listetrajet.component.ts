import { Component, OnInit } from '@angular/core';
import {AjoutrajetService} from '../../services/ajoutrajet.service'


@Component({
  selector: 'app-listetrajet',
  templateUrl: './listetrajet.component.html',
  styleUrls: ['./listetrajet.component.css']
})
export class ListetrajetComponent implements OnInit {

todos:any;
  constructor(private ajoutTrajet : AjoutrajetService){}
  



  
ngOnInit() {

    this.todos=[];
    this.ajoutTrajet.getTraj().subscribe((todos)=>{
      console.log('hello world');
  this.todos=todos;
    })
  }

}
