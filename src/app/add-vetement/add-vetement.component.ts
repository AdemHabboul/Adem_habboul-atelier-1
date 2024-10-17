import { Component } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { VetementService } from '../vetement.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Marque } from '../model/marque.model';

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
    this.vetementService.ajouterVetement(this.newVetement);
    // Optionally reset the form after submission
    this.newVetement = new Vetement();
    this.router.navigate(['vetement']);
  }
}
