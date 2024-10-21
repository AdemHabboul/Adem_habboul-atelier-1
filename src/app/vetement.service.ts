import { Injectable } from '@angular/core';
import { Vetement } from './model/vetement.model';
import { Marque } from './model/marque.model';

@Injectable({
  providedIn: 'root'
})
export class VetementService {
  vetement: Vetement[]; 
  vetements! :Vetement;
  marques : Marque[];
  vetementsrecherche! : Vetement[];

  constructor() {
    this.marques = [ {idMar : 1, nomMar : "nike"},
      {idMar : 2, nomMar : "adidas"}];
    this.vetement = [
      { idVetement: 1, nomVetement: "nike t-shirt", prixVetement: 350, dateCreation: new Date("01/14/2011"),marque : {idMar : 1, nomMar : "nike"} },
      { idVetement: 2, nomVetement: "jordan 4", prixVetement: 450, dateCreation: new Date("12/17/2010"),marque:{idMar:1,nomMar:"nike"} },
      { idVetement: 3, nomVetement: "air jordan 1 low", prixVetement: 400, dateCreation: new Date("02/20/2020"),marque:{idMar:1,nomMar:"nike"} },
    ];
  }

  listeVetement(): Vetement[] {
    return this.vetement;
  }

  ajouterVetement(vet: Vetement) {
    this.vetement.push(vet);
  }

  rechercherParMarque(idMar: number): Vetement[]{
    this.vetementsrecherche = [];
    this.vetement.forEach((cur, index) => {
    if(idMar == cur.marque.idMar) {
    console.log("cur "+cur);
    this.vetementsrecherche.push(cur);
    }
    });
    return this.vetementsrecherche;
    }

    rechercherParNom(nom: string): Vetement[] {
      return this.vetement.filter(supp => 
        supp.nomVetement && supp.nomVetement.toLowerCase().includes(nom.toLowerCase())
      );
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

  listeMarques():Marque[] {
    return this.marques;
  }

  consulterMarques(id:number): Marque{
    return this.marques.find(mar => mar.idMar == id)!;
  }
}


