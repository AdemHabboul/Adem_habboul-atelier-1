import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VetementService } from '../services/vetement.service';
import { Vetement } from '../model/vetement.model';
import { Marque } from '../model/marque.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../validators/email-validator'; 

@Component({
  selector: 'app-add-vetement',
  templateUrl: './add-vetement.component.html',
})
export class AddVetementComponent implements OnInit {
  newVetement = new Vetement();
  marques!: Marque[];
  newIdMarque!: number;
  newMarque!: Marque;
  addVetementForm!: FormGroup;

  constructor(private vetementService: VetementService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.vetementService.listeMarques().
    subscribe(marques => {console.log(marques);
      this.marques = marques._embedded.marques;
    });

    this.addVetementForm = this.formBuilder.group({
      idVetement: ['', [Validators.required, Validators.minLength(1)]],
      nomVetement: ['', [Validators.required, Validators.minLength(3)]],
      // email: ['', [Validators.required, emailValidator()]], 
      prixVetement: ['', [Validators.required]],
      dateCreation: ['', [Validators.required]],
      idMarque: ['', [Validators.required]]
    });
  }

  addVetement() {
    
    this.newVetement.idVetement = this.addVetementForm.value.idVetement;
    this.newVetement.nomVetement = this.addVetementForm.value.nomVetement;
    this.newVetement.prixVetement = this.addVetementForm.value.prixVetement;
    this.newVetement.dateCreation = this.addVetementForm.value.dateCreation;

    this.newVetement.marque = this.marques.find(
      marque => marque.idMar == this.addVetementForm.value.idMarque
    )!;

    this.vetementService.ajouterVetement(this.newVetement).subscribe(
      vetement => {
        console.log('Vetement added:', vetement);
        this.router.navigate(['vetements']);
      },
      error => {
        console.error('Error adding vetement:', error);
      }
    );
  }
}
