import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgAisModule } from 'angular-instantsearch';

import { SearchInterfaceComponent } from './search-interface.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { SearchService } from './search.service';

@NgModule({
    declarations: [
        SearchInterfaceComponent,
        SearchFormComponent,
    ],
    imports: [
        CommonModule,
        NgAisModule,
        FormsModule
    ],
    providers: [SearchService]
})

export class SearchInterfaceModule {}
