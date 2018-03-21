import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Image } from "./../../model/image";
import { TiqavApiService } from "./../../services/tiqav-api.service";
import { ImagesComponent } from "./../../shared/images/images.component";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./../container.css", "./search.component.css"]
})
export class SearchComponent implements OnInit {
  results: Image[] = [];
  searchWord: string;

  constructor(private route: ActivatedRoute, private tiqavApiService: TiqavApiService) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      this.searchWord = params["word"] || "ちくわぶ";
      this.tiqavApiService.getSearch(this.searchWord).subscribe(data => (this.results = data), err => console.log(err));
    });
  }
}
