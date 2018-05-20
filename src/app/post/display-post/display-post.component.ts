import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-display-post',
  templateUrl: './display-post.component.html',
  styleUrls: ['./display-post.component.css']
})
export class DisplayPostComponent implements OnInit {

  id: number;

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
      }
    );
  }

}
