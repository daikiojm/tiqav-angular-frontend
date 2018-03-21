import { Component, OnInit, Inject } from "@angular/core";
import { MD_DIALOG_DATA } from "@angular/material";

import { Image } from "./../../model/image";
import { TiqavApiService } from "./../../services/tiqav-api.service";
import { ImagesInfoComponent } from "./../images-info/images-info.component";
import { ImagesRelatedComponent } from "./../images-related/images-related.component";
import { TagsComponent } from "./../tags/tags.component";

@Component({
  selector: "app-images-dialog",
  templateUrl: "./images-dialog.component.html",
  styleUrls: ["./images-dialog.component.css"]
})
export class ImagesDialogComponent implements OnInit {
  image: Image;
  tags: string[] = [];
  images: Image[];

  constructor(@Inject(MD_DIALOG_DATA) public data: any, private tiqavApiService: TiqavApiService) {
    this.images = data.images;
    this.image = this.getCurrentImageData(data.currentId);
  }

  ngOnInit() {
    this.getTags();
  }

  getTags() {
    this.tiqavApiService.getTag(this.image.id).subscribe(data => (this.tags = data), err => console.log(err));
  }

  getCurrentImageData(id: string): Image {
    let result = new Image();
    this.images.forEach(elm => {
      if (id === elm.id) {
        result = elm;
      }
    });
    return result;
  }

  refreshCurrentImageDataFromAll(id: string) {
    this.tiqavApiService.getImage(id).subscribe(data => (this.image = data), err => console.log(err));
  }

  getImage(id: string, ext: string): string {
    return this.tiqavApiService.getImageUrl(id, ext);
  }

  onChangeRelatedImage(id: string) {
    console.log(id);
    this.refreshCurrentImageDataFromAll(id);
    this.getTags();
  }

  getCurrentIndex(): number {
    return this.images.indexOf(this.image);
  }

  onClickNext() {
    const currentIndex = this.getCurrentIndex();
    this.image = this.images[currentIndex + 1];
  }

  onClickPrevious() {
    const currentIndex = this.getCurrentIndex();
    this.image = this.images[currentIndex - 1];
  }

  isEnabledNext(): boolean {
    return this.images.length - 1 > this.getCurrentIndex() ? true : false;
  }

  isEnabledPrevious(): boolean {
    return this.getCurrentIndex() !== 0 ? true : false;
  }
}
