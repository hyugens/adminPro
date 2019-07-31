import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress', null) txtProgress: ElementRef;

  // tslint:disable-next-line: no-input-rename
  @Input('nombre') leyenda = 'Leyenda';
  @Input() porcentaje = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChange( value: number ) {
    const elemHTML = this.txtProgress.nativeElement;

    this.porcentaje = value;
    if ( value >= 100 ) { this.porcentaje = 100; } else if ( value <= 0 ) { this.porcentaje = 0; }

    elemHTML.value = this.porcentaje;
    this.cambioValor.emit( this.porcentaje );
  }

  changeValue( value: number ) {
    const elemHTML = this.txtProgress.nativeElement;

    this.porcentaje += value;
    if ( this.porcentaje >= 100 ) { this.porcentaje = 100; } else if ( this.porcentaje <= 0 ) { this.porcentaje = 0; }
    this.cambioValor.emit( this.porcentaje );
    elemHTML.focus();
  }

}
