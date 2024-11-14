import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VetementService } from '../services/vetement.service';
import { Vetement } from '../model/vetement.model';
import { Marque } from '../model/marque.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-vetement',
  templateUrl: './update-vetement.component.html',
  styleUrls: ['./update-vetement.component.css']
})
export class UpdateVetementComponent implements OnInit {
  marque!: Marque[];
  updatedMarId!: number;
  currentVetement = new Vetement();
  myForm!: FormGroup; 

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private vetementService: VetementService,
    private formBuilder: FormBuilder 
  ) {}

  ngOnInit(): void {
    this.marque = this.vetementService.listeMarques();
    this.currentVetement = this.vetementService.consulterVetement(this.activatedRoute.snapshot.params['id']);
    this.updatedMarId = this.currentVetement.marque.idMar;

    // Initialize the form with validation
    this.myForm = this.formBuilder.group({
      mailVetement: [this.currentVetement.mailVetement, [Validators.required, Validators.email]],
      idVetement: [this.currentVetement.idVetement, Validators.required],
      nomVetement: [this.currentVetement.nomVetement, [Validators.required, Validators.minLength(6)]],
      prixVetement: [this.currentVetement.prixVetement, [Validators.required,Validators.min(1)]],
      dateCreation: [this.currentVetement.dateCreation, Validators.required],
      marque: [this.updatedMarId, Validators.required]
    });
  }

  updateVetement() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    this.currentVetement.marque = this.vetementService.consulterMarques(this.updatedMarId);
    this.vetementService.updateVetement(this.currentVetement);
    this.router.navigate(['vetement']);
  }
}
