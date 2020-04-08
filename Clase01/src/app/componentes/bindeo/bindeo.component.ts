import { Component, OnInit } from '@angular/core';
import {Mascota} from '../../clases/Mascota/mascota';
@Component({
  selector: 'app-bindeo',
  templateUrl: './bindeo.component.html',
  styleUrls: ['./bindeo.component.css']
})
export class BindeoComponent implements OnInit {

  nombre : string;
  srcFoto : string;
  lista : Array<Mascota> = [];
  constructor() { }

  ngOnInit(): void {

    this.nombre = ""
    this.srcFoto = "https://i.guim.co.uk/img/media/20098ae982d6b3ba4d70ede3ef9b8f79ab1205ce/0_0_969_1005/master/969.jpg?width=300&quality=85&auto=format&fit=max&s=26fe0a6479a2b57e12f31c39e6b1c1ef"
  }

  public enviar(event):void{
    //console.log(this.nombre);
    this.lista.push(new Mascota(this.nombre, this.srcFoto, 'Perro'));
  }

  public sacarTurno (e) {
    console.log(e);
}
}
