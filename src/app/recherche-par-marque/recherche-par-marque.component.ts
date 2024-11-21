import { Component, OnInit } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { Marque } from '../model/marque.model';
import { VetementService } from '../services/vetement.service';

@Component({
  selector: 'app-recherche-par-marque',
  templateUrl: './recherche-par-marque.component.html'
})
export class RechercheParMarqueComponent implements OnInit {

  vetements!: Vetement[];
  marques!: Marque[];
  IdMarque!: number;

  constructor(private vetementService: VetementService) { }

  ngOnInit(): void {
    this.vetementService.listeMarques().
      subscribe(marques => {
        this.marques = marques._embedded.marques;
        console.log(marques);
      });
  }

  onChange() {
    this.vetementService.rechercherParMarque(this.IdMarque).
      subscribe(vetements => { this.vetements = vetements });
  }

}
