import { VetementService } from './../services/vetement.service';
import { Component, OnInit } from '@angular/core';
import { Vetement } from '../model/vetement.model';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
})
export class RechercheParNomComponent implements OnInit {

  nomVetement!: string;  // Name of the vetement
  vetements!: Vetement[];  // Array of vetements
  allVetements!: [];  // Array to hold all vetements (adjust type if needed)
  searchTerm!: string;  // Term for search functionality

  constructor(private vetementService: VetementService) { }

  ngOnInit(): void {
    this.vetementService.listeVetements().subscribe(vetements => {  // Ensure listeSupplement works with Vetement
      console.log(vetements);
      this.vetements = vetements;  // Store fetched vetements
    });
  }
}
