import { Component, OnInit } from '@angular/core';
import { Marque } from './../model/marque.model';
import { VetementService } from '../services/vetement.service';

@Component({
  selector: 'app-list-marque',
  templateUrl: './liste-marque.component.html',
})
export class ListeMarquesComponent implements OnInit {
  marques!: Marque[];
  updatedMarque: Marque = { "idMar": 0, "nomMar": "" };
  ajout: boolean = true;

  constructor(private vetementService: VetementService) { }

  ngOnInit(): void {
    this.chargerMarques();
  }

  chargerMarques() {
    this.vetementService.listeMarques().
      subscribe(marques => {
        this.marques = marques._embedded.marques;
        console.log(marques);
      });
  }

  marqueUpdated(marque: Marque) {
    console.log("Marque updated event", marque);
    this.vetementService.ajouterMarque(marque).subscribe(() => this.chargerMarques());
  }

  updateMar(marque: Marque) {
    this.updatedMarque = marque;
    this.ajout = false;
  }
}
