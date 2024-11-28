import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VetementService } from '../services/vetement.service'; 
import { Vetement } from '../model/vetement.model'; 

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-vetements',
  templateUrl: './vetements.component.html',  
})
export class VetementsComponent implements OnInit {
  vetements!: Vetement[];  // Use Vetement type instead of Supplement

  constructor(private vetementService: VetementService, public authService: AuthService) {}

  ngOnInit(): void {
    this.chargerVetements();
  }

  chargerVetements(): void {
    this.vetementService.listeVetements().subscribe(vetements => {  // Update service call to listeVetements()
      console.log(vetements);
      this.vetements = vetements;
    });
  }

  supprimerVetement(v: Vetement): void {  // Update method name to supprimerVetement
    this.vetementService.supprimerVetement(v.idVetement).subscribe(() => {  // Update service call to supprimerVetement
      console.log("Vetement supprimé");
      this.chargerVetements();
    });
  }
}
