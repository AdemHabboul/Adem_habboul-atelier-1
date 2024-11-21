import { VetementService } from './../services/vetement.service';
import { Vetement } from './../model/vetement.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Marque } from '../model/marque.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-vetements',
  templateUrl: './add-vetements.component.html'
})
export class AddVetementsComponent {

  newVetement = new Vetement();
  marques!: Marque[];
  newIdMarque!: number;
  newMarque!: Marque;
  myForm!: FormGroup;

  constructor(private vetementService: VetementService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  
  ngOnInit(): void {
    this.vetementService.listeMarques().
    subscribe(marques => {
      console.log(marques);
      this.marques = marques._embedded.marques;
    });
  
    this.myForm = this.formBuilder.group({
      idVetement: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      nomVetement: ['', [Validators.required, Validators.minLength(5)]],
      prixVetement: ['', [Validators.required, Validators.min(0)]],
      datedeSortie: ['', [Validators.required]],
      marque: ['', [Validators.required]] 
    });
  }
  
  addVetement() {
    this.newVetement.marque = this.marques.find(marque => marque.idMar == this.newIdMarque)!;
    this.vetementService.ajouterVetement(this.newVetement).subscribe(vetement => {
      console.log(vetement);
      this.router.navigate(['vetements']);
    });
  }
}
