import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchWord = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    /* tslint:disable no-any */
    this.route.queryParams.subscribe((params: any) => {
      this.searchWord = params['word'] || '';
    });
  }
}
