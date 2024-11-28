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
  marques: Marque[] = []; // Initialize as an empty array
  updatedMarqueId!: number;
  myForm!: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private vetementService: VetementService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.vetementService.listeMarques()
      .subscribe(data => {
        console.log(data);
        this.marques = data._embedded ? data._embedded.marques : []; // Handle response structure
      });
    this.vetementService.consulterVetement(this.activatedRoute.snapshot.params['id'])
      .subscribe(vetement => {
        this.currentVetement = vetement;
        this.updatedMarqueId = this.currentVetement.marque.idMar;
      });
    this.myForm = this.formBuilder.group({
      idVetement: ['', [Validators.required]],
      nomVetement: ['', [Validators.required, Validators.minLength(5)]],
      prixVetement: ['', [Validators.required, Validators.min(0)]],
      dateCreation: ['', [Validators.required]],
      marque: ['', [Validators.required]]
    });
  }

  updateVetement() {
    this.currentVetement.marque = this.marques
      .find(marque => marque.idMar == this.updatedMarqueId)!;
    this.vetementService.updateVetement(this.currentVetement)
      .subscribe(vetement => {
        this.router.navigate(['vetements']);
      });
  }
}
