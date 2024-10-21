import { Component, OnInit } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { VetementService } from '../vetement.service';
@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './rechercher-par-nom.component.html',
})
export class RechercherParNomComponent implements OnInit {

  allVetements!: Vetement[];
  searchTerm!: string;
  vetements: Vetement[] = [];

  constructor(private vetementService: VetementService) {}

  ngOnInit(): void {
    // Directly assign the result from the service without subscribing
    this.allVetements = this.vetementService.listeVetement();
  }

  rechercherSupps() {
    // Call the method directly to filter supplements
    this.vetements = this.vetementService.rechercherParNom(this.searchTerm);
  }

  onKeyUp(filterText: string) {
    this.vetements = this.allVetements.filter(item =>
      item.nomVetement?.toLowerCase().includes(filterText.toLowerCase())
    );
  }
}