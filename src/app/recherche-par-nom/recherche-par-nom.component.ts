import { Component, OnInit } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { VetementService } from '../services/vetement.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html'
})
export class RechercheParNomComponent implements OnInit {

  nomVetement!: string;
  vetements!: Vetement[];
  allVetements!: [];
  searchTerm!: string;

  constructor(private vetementService: VetementService) { }

  ngOnInit(): void {
    this.vetementService.listeVetement().subscribe(vetements => {
      console.log(vetements);
      this.vetements = vetements;
    });
  }
}
