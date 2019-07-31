import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { IncrementadorComponent } from './incrementador/incrementador.component';
import { GraficaDonaComponent } from './grafica-dona/grafica-dona.component';
// import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        IncrementadorComponent,
        GraficaDonaComponent
    ],
    exports: [
        IncrementadorComponent,
        GraficaDonaComponent
    ],
    imports: [
        FormsModule,
        ChartsModule
        // CommonModule
    ]
})
export class ComponentsModule {

}
