import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mascota } from 'src/app/clases/mascota/mascota';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {

  @Input() mascota: Mascota;
  mostrarDetalles : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  
  public mostrarDetalle (event) {
    this.mostrarDetalles = true;
  }
}
