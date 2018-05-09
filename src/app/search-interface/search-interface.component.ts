import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-interface',
  templateUrl: './search-interface.component.html',
  styleUrls: ['./search-interface.component.css']
})
export class SearchInterfaceComponent implements OnInit {

  @ViewChild('f') slForm: NgForm;

  constructor() { }

  ngOnInit() {
  }

}
