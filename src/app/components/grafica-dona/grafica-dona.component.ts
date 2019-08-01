import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: []
})
export class GraficaDonaComponent implements OnInit {
  @Input() leyenda: string;
  @Input() labels: Label[];
  @Input() data: number[];
  @Input() charType: ChartType;

  constructor() { }

  ngOnInit() {
  }
}
