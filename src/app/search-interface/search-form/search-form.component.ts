import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { SearchService } from '../search.service';
import { Post } from '../../shared/post.model';
import { User } from '../../shared/user.model';

import { environment } from '../../../environments/environment';
import * as instantsearch from 'instantsearch.js';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  posts: Post[];
  users: User[];

  constructor(private searchService: SearchService,
    private router: Router) { }

  ngOnInit() {
    this.searchService.getUsers().subscribe(users => {
      this.users = users;
      console.log(users);
    });
  }

  getUsername(userID) {
    let username = '';
    if (this.users !== undefined) {
      this.users.map(user => {
        if (user.ID === userID) {
          username = user.firstName;
        }
      });
    }
    return username;
  }

  retrieveID(url) {
    let urlParts = url.split('/');
    let id = urlParts[urlParts.length - 1];
    return id;
  }

  readMore(id) {
    this.router.navigate(['post/', id]);
  }
}
