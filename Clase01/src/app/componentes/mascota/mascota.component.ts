//Se tiene que importar en Input, Output y EventEmitter
import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Mascota } from 'src/app/clases/Mascota/mascota';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {
  //Si no se importa el EventEmmitter desde @angular/core tira error al poner <any>
  @Output()turno = new EventEmitter<any>();
  @Input()mascota:Mascota;

  constructor() { }

  ngOnInit(): void {
    console.log(this.mascota);
  }

  click(){
    console.log("Evento click");
    this.turno.emit(this.mascota.nombre);
  }
  
}
