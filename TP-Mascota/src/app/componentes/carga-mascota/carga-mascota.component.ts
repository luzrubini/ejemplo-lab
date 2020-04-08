import { Component, OnInit } from '@angular/core';
import {Mascota} from '../../clases/Mascota/mascota';
@Component({
  selector: 'app-carga-mascota',
  templateUrl: './carga-mascota.component.html',
  styleUrls: ['./carga-mascota.component.css']
})
export class CargaMascotaComponent implements OnInit {

  nombre : string;
  tipo: string;
  foto: string;
  lista : Array<Mascota> = [];
  constructor() { }

  ngOnInit(): void {
    this.nombre = ""

  }
  public enviar(event):void{
    //console.log(this.nombre);
    this.lista.push(new Mascota(this.nombre, this.foto, this.tipo));
  }

}
