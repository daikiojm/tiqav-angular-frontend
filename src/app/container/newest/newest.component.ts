import { Observable } from 'rxjs/Rx';
import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/mergeMap';
import { Headers, Jsonp, Response, URLSearchParams } from '@angular/http';

import { TiqavApiService } from './../../services/tiqav-api.service';
import { Image } from './../../model/image';

@Component({
  selector: 'app-newest',
  templateUrl: './newest.component.html',
  styleUrls: ['./newest.component.css']
})
export class NewestComponent implements OnInit {
  results: Image[] = [];

  constructor(
    private tiqavApiService: TiqavApiService,
    private http: Jsonp
  ) { }

  ngOnInit() {
    this.tiqavApiService.getNewest()
    .subscribe(
      data => this.results = data,
      err => console.log(err)
    );
  }

  getImage(id: string, ext: string): string {
    return this.tiqavApiService.getImageUrl(id, ext);
  }
}
