import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  progreso = 50;
  progreso2 = 30;

  constructor() { }

  ngOnInit() {
  }

  // changeValue( value: number ) {
  //   this.porcentaje += value;
  //   if( this.porcentaje >= 100 ) { this.porcentaje = 100; } else if( this.porcentaje <= 0 ){ this.porcentaje = 0; }
  // }
}
