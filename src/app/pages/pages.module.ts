import { NgModule } from '@angular/core';

// import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

// Modulos
import { SharedModule } from '../shared/header/shared.module';
import { ComponentsModule } from '../components/components.module';
import { PAGES_ROUTES } from './pages.routes';
import { CommonModule } from '@angular/common';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,
        AccountSettingsComponent,
        PromesasComponent,
        RxjsComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,
        AccountSettingsComponent
    ],
    imports: [
        SharedModule,
        ComponentsModule,
        CommonModule,
        // FormsModule,
        PAGES_ROUTES
    ]
})
export class PagesModule {

}
