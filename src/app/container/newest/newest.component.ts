import { Component, OnInit } from '@angular/core';

import { TiqavApiService } from './../../services/tiqav-api.service';
import { Result } from './../../model/result';

@Component({
  selector: 'app-newest',
  templateUrl: './newest.component.html',
  styleUrls: ['./newest.component.css']
})
export class NewestComponent implements OnInit {
  private results: Result[] = [];

  constructor(
    private tiqavApiService: TiqavApiService
  ) { }

  ngOnInit() {
    this.tiqavApiService.getSearch('ちくわ')
    .subscribe(
      data => {
        console.log(data);
        this.results = data;
      },
      error => {
        console.log(error);
      }
    );
  }

}
