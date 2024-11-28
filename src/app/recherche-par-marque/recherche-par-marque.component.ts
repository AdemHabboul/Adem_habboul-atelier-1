import { VetementService } from './../services/vetement.service';
import { Component } from '@angular/core';
import { Marque } from '../model/marque.model';
import { Vetement } from '../model/vetement.model';

@Component({
  selector: 'app-recherche-par-marque',
  templateUrl: './recherche-par-marque.component.html',
})
export class RechercheParMarqueComponent {
  supprimerVetement(_t27: Vetement) {
    throw new Error('Method not implemented.');
  }

  vetements!: Vetement[];
  marques!: Marque[];
  IdMarque!: number;

  constructor(private vetementService: VetementService) {}

  ngOnInit(): void {
    this.vetementService.listeMarques().subscribe((marques) => {
      this.marques = marques._embedded.marques;
      console.log(marques);
    });
  }

  onChange() {
    this.vetementService.rechercherParMarque(this.IdMarque).subscribe((vetements) => {
      this.vetements = vetements;
    });
  }
}
