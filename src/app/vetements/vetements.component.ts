import { Component, OnInit } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { VetementService } from '../vetement.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-vetement',
  templateUrl: './vetements.component.html',
  styleUrls: ['./vetements.component.css'] // Corrected from styleUrl to styleUrls
})
export class VetementComponent implements OnInit {
  vetement: Vetement[] = []; 


  constructor(private vetementService: VetementService) {}

  ngOnInit(): void {
    this.vetement = this.vetementService.listeVetement(); // Populate on init


}
supprimerVetement(v: Vetement)
{
  let conf = confirm("Etes-vous sûr ?");
 if (conf) this.vetementService.supprimerVetement(v);
  }
  
}
