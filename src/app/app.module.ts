import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VetementComponent } from './vetements/vetements.component';
import { AddVetementComponent } from './add-vetement/add-vetement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateVetementComponent } from './update-vetement/update-vetement.component';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';
import { RechercherParNomComponent } from './rechercher-par-nom/rechercher-par-nom.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
@NgModule({
  declarations: [
    AppComponent,
    VetementComponent,
    AddVetementComponent,
    UpdateVetementComponent,
    RechercheParMarqueComponent,
    RechercherParNomComponent,
    LoginComponent,
    ForbiddenComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
