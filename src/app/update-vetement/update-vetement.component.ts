import { Component } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { ActivatedRoute, Router } from '@angular/router';
import { VetementService } from '../services/vetement.service';
import { Marque } from '../model/marque.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-vetement',
  templateUrl: './update-vetement.component.html'
})
export class UpdateVetementComponent {

  currentVetement = new Vetement();
  marques!: Marque[];
  updatedMarqueId!: number;
  myForm!: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private vetementService: VetementService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // Fetch available marques for dropdown selection
    this.vetementService.listeMarques().subscribe(marques => {
      console.log(marques);
      this.marques = marques._embedded.marques;
    });

    // Fetch the current vetement details for editing
    this.vetementService.consulterVetement(this.activatedRoute.snapshot.params['id']).subscribe(vetement => {
      this.currentVetement = vetement;
      this.updatedMarqueId = this.currentVetement.marque.idMar;
    });

    // Define the form group
    this.myForm = this.formBuilder.group({
      idVetement: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      nomVetement: ['', [Validators.required, Validators.minLength(5)]],
      prixVetement: ['', [Validators.required, Validators.min(0)]],
      datedeSortie: ['', [Validators.required]],
      marque: ['', [Validators.required]]
    });
  }

  updateVetement() {
    // Assign the selected marque to the current vetement
    this.currentVetement.marque = this.marques.find(marque => marque.idMar == this.updatedMarqueId)!;
    
    // Update the vetement details in the service
    this.vetementService.updateVetement(this.currentVetement).subscribe(vetement => {
      this.router.navigate(['vetements']);
    });
  }
}
