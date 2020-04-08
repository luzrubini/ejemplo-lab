import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mascota } from 'src/app/clases/mascota/mascota';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  @Output() detalle = new EventEmitter<any>();
  @Input() mascota: Mascota;
  constructor() { }

  ngOnInit(): void {
  }
  click () {
    this.detalle.emit();
}

}
