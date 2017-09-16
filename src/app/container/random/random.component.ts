import { Component, OnInit } from '@angular/core';

import { Image } from './../../model/image';
import { TiqavApiService } from './../../services/tiqav-api.service';
import { ImagesComponent } from './../../shared/images/images.component';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {
  results: Image[] = [];

  constructor(
    private tiqavApiService: TiqavApiService
  ) { }

  ngOnInit() {
  }

}
