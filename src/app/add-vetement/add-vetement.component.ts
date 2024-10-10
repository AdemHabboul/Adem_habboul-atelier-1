import { Component } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { VetementService } from '../vetement.service';

@Component({
  selector: 'app-add-vetement',
  templateUrl: './add-vetement.component.html',
  styleUrls: [] 
})
export class AddVetementComponent {
  newVetement: Vetement = new Vetement();

  constructor(private vetementService: VetementService) { }

  addVetement() {
    console.log(this.newVetement);
    this.vetementService.ajouterVetement(this.newVetement);
    // Optionally reset the form after submission
    this.newVetement = new Vetement();
  }
}
