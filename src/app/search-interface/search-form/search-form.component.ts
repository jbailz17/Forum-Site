import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  searchForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.initForm()
  }

  private initForm() {
    let search = '';

    this.searchForm = new FormGroup({
      'search': new FormControl(search)
    });
  }
}
