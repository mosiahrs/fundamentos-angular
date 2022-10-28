import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent{

name = "Joao";
dataNascimento = "1995-05-01"
urlImagem = "./assets/joao.jpg"

mostrarDob(){
  alert(this.dataNascimento)
}
}
