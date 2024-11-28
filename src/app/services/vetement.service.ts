import { MarqueWrapper } from './../model/WrappedMarque.model';
import { Injectable } from '@angular/core';
import { Vetement } from '../model/vetement.model';  
import { Marque } from '../model/marque.model'; 
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURL, apiURLMar } from '../config';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class VetementService {

  vetements!: Vetement[]; 
  marques!: Marque[];  
  vetementsRecherche!: Vetement[];  

  constructor(private http: HttpClient) {}

  // Fetch all vetements
  listeVetements(): Observable<Vetement[]> {
    return this.http.get<Vetement[]>(apiURL);  
  }

  // Add a new vetement
  ajouterVetement(vetement: Vetement): Observable<Vetement> {
    return this.http.post<Vetement>(apiURL, vetement, httpOptions); 
  }

  // Delete a vetement by ID
  supprimerVetement(id: number): Observable<void> {
    const url = `${apiURL}/${id}`;
    return this.http.delete<void>(url, httpOptions);
  }

  // Get a specific vetement by ID
  consulterVetement(id: number): Observable<Vetement> {
    const url = `${apiURL}/${id}`;
    return this.http.get<Vetement>(url);
  }

  // Update a vetement
  updateVetement(vetement: Vetement): Observable<Vetement> {
    return this.http.put<Vetement>(apiURL, vetement, httpOptions);
  }

  // Fetch all marques (formerly nutritionals)
  listeMarques(): Observable<MarqueWrapper> {
    return this.http.get<MarqueWrapper>(apiURLMar);  // Fetching Marques
  }

  // Get a specific marque by ID
  consulterMarque(id: number): Marque {
    return this.marques.find(marque => marque.idMar == id)!;
  }

  // Search vetements by marque ID
  rechercherParMarque(idMarque: number): Observable<Vetement[]> {  
    const url = `${apiURL}/vetementmarque/${idMarque}`;  
    return this.http.get<Vetement[]>(url);
  }

  // Add a new marque
  ajouterMarque(marque: Marque): Observable<Marque> {
    return this.http.post<Marque>(apiURLMar, marque, httpOptions);
  }

  // Sort vetements by ID
  trierVetements() {
    this.vetements = this.vetements.sort((v1, v2) => {
      if (v1.idVetement! > v2.idVetement!) {  // Updated to idVetement
        return 1;
      }
      if (v1.idVetement! < v2.idVetement!) {  // Updated to idVetement
        return -1;
      }
      return 0;
    });
  }

}
