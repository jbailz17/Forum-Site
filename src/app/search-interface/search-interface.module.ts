import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SearchInterfaceComponent } from './search-interface.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { SearchResultsComponent } from './search-results/search-results.component';

@NgModule({
    declarations: [
        SearchInterfaceComponent,
        SearchFormComponent,
        SearchResultsComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})

export class SearchInterfaceModule {}
