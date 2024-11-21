import { Injectable } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { Marque } from '../model/marque.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURL, apiURLMarque } from '../config';
import { MarqueWrapper } from '../model/marqe.Wrapped.model';

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

  listeVetement(): Observable<Vetement[]> {
    return this.http.get<Vetement[]>(apiURL);
  }

  ajouterVetement(vetement: Vetement): Observable<Vetement> {
    return this.http.post<Vetement>(apiURL, vetement, httpOptions);
  }

  supprimerVetement(id: number) {
    const url = `${apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterVetement(id: number): Observable<Vetement> {
    const url = `${apiURL}/${id}`;
    return this.http.get<Vetement>(url);
  }

  updateVetement(vetement: Vetement): Observable<Vetement> {
    return this.http.put<Vetement>(apiURL, vetement, httpOptions);
  }

  listeMarques(): Observable<MarqueWrapper> {
    return this.http.get<MarqueWrapper>(apiURLMarque);
  }

  rechercherParMarque(idMarque: number): Observable<Vetement[]> {
    const url = `${apiURL}/vetementsmarque/${idMarque}`;
    return this.http.get<Vetement[]>(url);
  }

  ajouterMarque(marque: Marque): Observable<Marque> {
    return this.http.post<Marque>(apiURLMarque, marque, httpOptions);
  }

  trierVetements() {
    this.vetements = this.vetements.sort((n1, n2) => {
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
