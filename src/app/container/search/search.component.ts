import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Image } from './../../model/image';
import { TiqavApiService } from './../../services/tiqav-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./../container.css', './search.component.css']
})
export class SearchComponent implements OnInit {
  results: Image[] = [];
  searchWord = '';

  constructor(private route: ActivatedRoute, private tiqavApiService: TiqavApiService) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.searchWord = params['word'] || 'ちくわぶ';
      this.tiqavApiService.getSearch(this.searchWord).subscribe(data => (this.results = data), err => console.log(err));
    });
  }
}
