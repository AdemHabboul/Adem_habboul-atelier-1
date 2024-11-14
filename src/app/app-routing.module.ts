import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VetementGuard } from './vetement.guard';
import { LoginComponent } from './login/login.component';
import { VetementComponent } from './vetements/vetements.component';
import { AddVetementComponent } from './add-vetement/add-vetement.component';
import { UpdateVetementComponent } from './update-vetement/update-vetement.component';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';
import { RechercherParNomComponent } from './rechercher-par-nom/rechercher-par-nom.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

const routes: Routes = [
  { path: 'vetement', component: VetementComponent },
  { path: 'add-vetement', component: AddVetementComponent, canActivate: [VetementGuard] },
  { path: '', redirectTo: 'vetement', pathMatch: 'full' },
  { path: 'updateVetement/:id', component: UpdateVetementComponent },
  { path: 'rechercheParMarque', component: RechercheParMarqueComponent },
  { path: 'rechercherParNom', component: RechercherParNomComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
