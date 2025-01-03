import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Marque } from '../model/marque.model';

@Component({
  selector: 'app-update-marque',
  templateUrl: './update-marque.component.html',
  styles: []
})
export class UpdateMarqueComponent implements OnInit {
  @Input() marque!: Marque;
  @Input() ajout!: boolean;
  @Output() marqueUpdated = new EventEmitter<Marque>();

  constructor() {}

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateMarque", this.marque);
  }

  saveMarque() {
    this.marqueUpdated.emit(this.marque);
  }
}
