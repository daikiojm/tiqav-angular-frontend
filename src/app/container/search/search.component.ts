import { Component, OnInit } from '@angular/core';

import { Image } from './../../model/image';
import { TiqavApiService } from './../../services/tiqav-api.service';
import { ImagesComponent } from './../../shared/images/images.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [
    './../container.css',
    './search.component.css'
  ]
})
export class SearchComponent implements OnInit {
  results: Image[] = [];

  constructor(
    private tiqavApiService: TiqavApiService
  ) { }

  ngOnInit() {
    this.tiqavApiService.getSearch('ちくわぶ')
    .subscribe(
      data => this.results = data,
      err => console.log(err)
    );
  }
}
