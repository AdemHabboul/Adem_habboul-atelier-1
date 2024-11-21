import { Vetement } from './../model/vetement.model';
import { Component, OnInit } from '@angular/core';
import { VetementService } from '../services/vetement.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-vetements',
  templateUrl: './vetements.component.html'
})
export class VetementsComponent implements OnInit {

  vetements!: Vetement[];

  constructor(private vetementService: VetementService, public authService : AuthService) {}
  
  ngOnInit(): void {
    this.chargerVetements();
  }

  chargerVetements() {
    this.vetementService.listeVetement().subscribe(vetements => {
      console.log(vetements);
      this.vetements = vetements;
    });
  }

  supprimerVetement(v: Vetement) {
    this.vetementService.supprimerVetement(v.idVetement).subscribe(() => {
      console.log("vetement supprimé");
      this.chargerVetements();
    });
  } 
}
