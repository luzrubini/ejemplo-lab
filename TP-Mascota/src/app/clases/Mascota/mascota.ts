export class Mascota {
    nombre: string;
    tipo: string;
    foto: string;
    color: string;

    constructor(nombre, img, tipo){
        this.nombre = (nombre);
        this.foto = (img);
        this.tipo = (tipo);
        this.cambiarColor()
    }

    private cambiarColor(){
        switch(this.tipo){
          case "perro":
            this.color = "color:green"
            break;
          case "gato":
            this.color = "color:red"
            break;
          case "pez":
            this.color = "color:blue"
            break;
        }
      }
}

