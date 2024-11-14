import { Marque } from "./marque.model";


export class Vetement {
    mailVetement!:string;
    idVetement!: number;
    nomVetement!: string;
    prixVetement!: number;
    dateCreation!: Date;
    marque! :Marque
  }
