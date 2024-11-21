import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VetementsComponent } from './vetements/vetements.component';
import { AddVetementsComponent } from './add-vetements/add-vetements.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateVetementComponent } from './update-vetement/update-vetement.component';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ListeMarquesComponent } from './liste-marques/liste-marques.component';
import { UpdateMarquesComponent } from './update-marques/update-marques.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    VetementsComponent,
    AddVetementsComponent,
    UpdateVetementComponent,
    RechercheParMarqueComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    LoginComponent,
    ForbiddenComponent,
    ListeMarquesComponent,
    UpdateMarquesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
