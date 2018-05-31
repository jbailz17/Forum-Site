import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreComponent } from './core.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    declarations: [
        CoreComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        NgbModule.forRoot()
    ],
    exports: [
        HeaderComponent,
        AppRoutingModule
    ]
})

export class CoreModule {}
