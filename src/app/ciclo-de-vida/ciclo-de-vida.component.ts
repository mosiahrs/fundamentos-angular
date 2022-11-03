import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css']
})
export class CicloDeVidaComponent implements OnInit, OnDestroy {

  @Input() texto = ""
 
  horario = new Date();
  timer: any = null!;

  ngOnInit(): void {
    console.log("OnInit disparou")
    
    this.timer = setInterval(() => this.horario = new Date(), 1000);
  }

  ngOnDestroy(): void {
      clearInterval(this.timer);
  }

}
