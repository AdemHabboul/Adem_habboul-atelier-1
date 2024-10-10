import { Injectable } from '@angular/core';
import { Vetement } from './model/vetement.model';

@Injectable({
  providedIn: 'root'
})
export class VetementService {
  vetement: Vetement[]; 
  vetements! :Vetement;

  constructor() {
    this.vetement = [
      { idVetement: 1, nomVetement: "nike t-shirt", prixVetement: 350, dateCreation: new Date("01/14/2011") },
      { idVetement: 2, nomVetement: "jordan 4", prixVetement: 450, dateCreation: new Date("12/17/2010") },
      { idVetement: 3, nomVetement: "gucci hat", prixVetement: 900, dateCreation: new Date("02/20/2020") },
    ];
  }

  listeVetement(): Vetement[] {
    return this.vetement;
  }

  ajouterVetement(vet: Vetement) {
    this.vetement.push(vet);
  }
  supprimerVetement( vet: Vetement){
    //supprimer le produit prod du tableau produits
    const index = this.vetement.indexOf(vet, 0);
    if (index > -1) {
    this.vetement.splice(index, 1);
    }
    //ou Bien
    /* this.produits.forEach((cur, index) => {
    if(prod.idProduit === cur.idProduit) {
    this.produits.splice(index, 1);
    }
    }); */
    }
    consulterVetement(id:number): Vetement{
      return this.vetement.find(p => p.idVetement == id)!;
      }
      updateVetement(v:Vetement)
{
// console.log(p);
this.supprimerVetement(v);
this.ajouterVetement(v);
this.trierVetement();
}
trierVetement(){
  this.vetement = this.vetement.sort((n1,n2) => {
  if (n1.idVetement! > n2.idVetement!) {
  return 1;
  }
  if (n1.idVetement! < n2.idVetement!) {
  return -1;
  }
  return 0;
  });
  }
}
