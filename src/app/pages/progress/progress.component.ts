import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [
  ]
})
export class ProgressComponent implements OnInit {

  progreso1: number = 20;
  progreso2: number = 30;

  constructor() { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

  // tslint:disable-next-line: typedef
  // cambiarValor( valor: number ) {

    // if (this.progreso >= 100 && valor > 0 ) {
    //  this.progreso = 100;
    //  return;
    // }

    // if (this.progreso <= 0 && valor < 0) {
    //  this.progreso = 0;
    //  return;
    // }

    // this.progreso = this.progreso + valor;

  // }

}
