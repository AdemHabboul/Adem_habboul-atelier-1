import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VetementsComponent } from './vetements/vetements.component';
import { AddVetementsComponent } from './add-vetements/add-vetements.component';
import { UpdateVetementComponent } from './update-vetement/update-vetement.component';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { vetementGuard } from './vetement.guard';
import { ListeMarquesComponent } from './liste-marques/liste-marques.component';


const routes: Routes = [
  { path : "vetements" , component : VetementsComponent },
  { path : "add-vetements" , component : AddVetementsComponent, canActivate:[vetementGuard] },
  { path : "updateVetement/:id" , component : UpdateVetementComponent },
  { path : "recherche-par-marque" , component : RechercheParMarqueComponent },
  { path : "recherche-par-nom" , component : RechercheParNomComponent },
  { path : "login" , component : LoginComponent },
  { path : "app-forbidden" , component :  ForbiddenComponent },
  { path: "liste-marques", component :  ListeMarquesComponent},
  { path : "" , redirectTo : "vetements" , pathMatch : "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
