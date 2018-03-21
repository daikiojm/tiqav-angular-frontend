import { Component, OnInit, Input } from "@angular/core";
import { Router, Params } from "@angular/router";
import { MdDialog } from "@angular/material";

@Component({
  selector: "app-tags",
  templateUrl: "./tags.component.html",
  styleUrls: ["./tags.component.css"]
})
export class TagsComponent implements OnInit {
  @Input() tags: string[];
  constructor(private router: Router, private dialog: MdDialog) {}

  ngOnInit() {}

  onClickTag(tag: string) {
    this.dialog.closeAll();
    const params = { word: tag };
    this.router.navigate(["/search"], { queryParams: params });
  }
}
