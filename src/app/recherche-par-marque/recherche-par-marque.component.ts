import { Component, OnInit } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { VetementService } from '../vetement.service';
import { Marque } from '../model/marque.model';

@Component({
  selector: 'app-recherche-par-marque',
  templateUrl: './recherche-par-marque.component.html',
  styleUrls: ['./recherche-par-marque.component.css']
})
export class RechercheParMarqueComponent implements OnInit {
  IdMar: number | undefined; // Use this for marque selection

  marques: Marque[] = []; // Initialize the array
  vetements: Vetement[] = [];

  constructor(private vetementService: VetementService) {}

  ngOnInit(): void {
    this.marques = this.vetementService.listeMarques(); // Load available marques
  }

  onChange(): void {
    if (this.IdMar !== undefined) {
      console.log(this.IdMar); // Logs selected marque ID
      this.vetements = this.vetementService.rechercherParMarque(this.IdMar); // Fetch vetements by selected marque
    } else {
      this.vetements = []; // Clear vetements if no marque is selected
    }
  }
  supprimerVetement(v: Vetement)
  {
    let conf = confirm("Etes-vous sûr ?");
   if (conf) this.vetementService.supprimerVetement(v);
    }
  }

