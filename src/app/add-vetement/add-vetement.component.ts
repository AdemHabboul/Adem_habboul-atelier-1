import { Component } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { VetementService } from '../vetement.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Marque } from '../model/marque.model';
import { NONE_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-add-vetement',
  templateUrl: './add-vetement.component.html',
  styleUrls: [] 
})
export class AddVetementComponent {
  newVetement: Vetement = new Vetement();
  marques! : Marque[];
  newIdMar! : number;
  newMarque! : Marque;
  constructor(private vetementService: VetementService,private router :Router,) { }
  ngOnInit() {
    this.marques = this.vetementService.listeMarques();
    }
    
  addVetement() {
    
    this.newMarque =  
this.vetementService.consulterMarques(this.newIdMar);
this.newVetement.marque = this.newMarque;
    console.log(this.newVetement);
    if(/^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/
.test(this.newVetement.mailVetement)
 &&  this.newVetement.idVetement!=undefined && this.newVetement.marque.idMar!=undefined && this.newVetement.nomVetement!=""&& this.newVetement.dateCreation!=undefined && (this.newVetement.mailVetement.indexOf("@gmail.com")!=-1 ||this.newVetement.mailVetement.indexOf("@yahoo.com")!=-1)){
    this.vetementService.ajouterVetement(this.newVetement);
    this.newVetement = new Vetement();
    this.router.navigate(['vetement']);
  }
  else{alert("invalide!! try again")}
  }
}