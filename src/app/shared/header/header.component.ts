import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { SearchFormComponent } from "./../search-form/search-form.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  searchWord: string;

  constructor(private route: ActivatedRoute) {
    this.searchWord = "";
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      this.searchWord = params["word"] || "";
    });
  }
}
