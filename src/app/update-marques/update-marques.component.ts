import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Marque } from '../model/marque.model';  // Adjusted to use Marque model

@Component({
  selector: 'app-update-marques',
  templateUrl: './update-marques.component.html'
})
export class UpdateMarquesComponent implements OnInit {

  @Input()
  marque!: Marque;  // Changed from Genre to Marque

  @Output()
  marqueUpdated = new EventEmitter<Marque>();  // Changed from genreUpdated to marqueUpdated

  @Input()
  ajout!: boolean;

  constructor() {}

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateMarques", this.marque);  // Updated log to refer to marque
  }

  saveMarque() {
    this.marqueUpdated.emit(this.marque);  // Emitting the updated marque
  }

}
