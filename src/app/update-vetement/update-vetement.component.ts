import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { VetementService } from '../vetement.service';
import { Vetement } from '../model/vetement.model';
import { Marque } from '../model/marque.model';

@Component({
  selector: 'app-update-vetement',
  templateUrl: './update-vetement.component.html',
  styleUrl: './update-vetement.component.css'
})
export class UpdateVetementComponent {
  marque! : Marque[];
updatedMarId! : number;

currentVetement= new Vetement();
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
  private vetementService: VetementService){}
  ngOnInit():void
  {
    this.marque = this.vetementService.listeMarques();
    console.log(this.activatedRoute.snapshot.params['id']);
    this.currentVetement = this.vetementService.consulterVetement(this.activatedRoute.snapshot.params['id']);
    console.log(this.currentVetement)
    this.updatedMarId=this.currentVetement.marque.idMar;
  }
  updateVetement()
  {
    if(/^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/.test(this.currentVetement.mailVetement) && this.currentVetement.idVetement!=undefined && this.currentVetement.marque.idMar!=undefined && this.currentVetement.nomVetement!=""&& this.currentVetement.dateCreation!=undefined && (this.currentVetement.mailVetement.indexOf("@gmail.com")!=-1 ||this.currentVetement.mailVetement.indexOf("@yahoo.com")!=-1)){
       
    this.currentVetement.marque=this.vetementService.consulterMarques(this.updatedMarId);
  this.vetementService.updateVetement(this.currentVetement);
  this.router.navigate(['vetement']);
  }
  else{
    alert("invalide!! try again");
  }
  }}