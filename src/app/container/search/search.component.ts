import { Component, OnInit } from '@angular/core';

import { Image } from './../../model/image';
import { TiqavApiService } from './../../services/tiqav-api.service';
import { ImagesComponent } from './../../shared/images/images.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  results: Image[] = [];

  constructor(
    private tiqavApiService: TiqavApiService
  ) { }

  ngOnInit() {
  }

}
