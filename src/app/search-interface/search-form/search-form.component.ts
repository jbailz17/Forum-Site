import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { SearchService } from '../search.service';
import { Post } from '../../shared/post.model';

import { environment } from '../../../environments/environment';
import * as instantsearch from 'instantsearch.js';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  posts: Post[];

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.searchPosts(" ");
    this.searchService.getPosts().subscribe(posts => {
      console.log(posts);
    });
  }
}
