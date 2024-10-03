import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../model/produit.model';


@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  
})
export class AddProduitComponent implements OnInit {
  [x: string]: any;
  newProduit = new Produit();
  message=String ;

  constructor(private produitService: ProduitService){}
  ngOnInit(): void {
    
  }
  addProduit(){
    console.log(this.newProduit);
    this.produitService.ajouterProduit(this.newProduit);
    
    }
}
