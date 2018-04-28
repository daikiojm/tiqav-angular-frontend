import { Component, OnInit } from '@angular/core';

import { Image } from './../../model/image';
import { TiqavApiService } from './../../services/tiqav-api.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./../container.css', './random.component.css']
})
export class RandomComponent implements OnInit {
  results: Image[] = [];

  constructor(private tiqavApiService: TiqavApiService) {}

  ngOnInit() {
    this.tiqavApiService.getRandom().subscribe(data => (this.results = data), err => console.log(err));
  }
}
