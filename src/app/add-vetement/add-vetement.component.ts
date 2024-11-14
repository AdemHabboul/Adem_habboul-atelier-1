import { Component, OnInit } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { VetementService } from '../services/vetement.service';
import { Router } from '@angular/router';
import { Marque } from '../model/marque.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-vetement',
  templateUrl: './add-vetement.component.html',
  styleUrls: []
})
export class AddVetementComponent implements OnInit {
  newVetement: Vetement = new Vetement();
  marques!: Marque[];
  newIdMar!: number;
  newMarque!: Marque;
  myform!: FormGroup;

  constructor(private vetementService: VetementService, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.marques = this.vetementService.listeMarques();
    this.myform = this.formBuilder.group({
      mailVetement: ['', [Validators.required, Validators.email]],
      idVetement: ['', [Validators.required]],
      nomVetement: ['', [Validators.required,Validators.minLength(6)]],
      prixVetement: ['', [Validators.required, Validators.min(1)]], 
      dateCreation: ['', [Validators.required]],
      marque: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.myform.invalid) {
      this.myform.markAllAsTouched(); 
      return; 
    }

  
    this.newMarque = this.vetementService.consulterMarques(this.newIdMar);
    this.newVetement.marque = this.newMarque;


    this.vetementService.ajouterVetement(this.newVetement);
    
    this.newVetement = new Vetement();
    this.router.navigate(['vetement']);
  }
}
