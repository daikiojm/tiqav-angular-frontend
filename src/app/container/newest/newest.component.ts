import { Component, OnInit } from '@angular/core';

import { Image } from './../../model/image';
import { TiqavApiService } from './../../services/tiqav-api.service';
import { ImagesComponent } from './../../shared/images/images.component';

@Component({
  selector: 'app-newest',
  templateUrl: './newest.component.html',
  styleUrls: ['./../container.css', './newest.component.css']
})
export class NewestComponent implements OnInit {
  results: Image[] = [];

  constructor(private tiqavApiService: TiqavApiService) {}

  ngOnInit() {
    this.tiqavApiService.getNewest().subscribe(data => (this.results = data), err => console.log(err));
  }
}
