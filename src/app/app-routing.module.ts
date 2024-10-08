import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VetementComponent } from './vetements/vetements.component';
import { AddVetementComponent } from './add-vetement/add-vetement.component';
import { UpdateVetementComponent } from './update-vetement/update-vetement.component';

const routes: Routes = [
  { path: 'vetement', component: VetementComponent },
  { path: 'add-vetement', component: AddVetementComponent },
  { path: '', redirectTo: 'vetement', pathMatch: 'full' },
  {path: "updateVetement/:id", component: UpdateVetementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
