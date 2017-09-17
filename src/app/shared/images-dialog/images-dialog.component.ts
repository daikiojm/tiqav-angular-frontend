import { Component, OnInit, Inject } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';

import { Image } from './../../model/image';
import { TiqavApiService } from './../../services/tiqav-api.service';
import { ImagesInfoComponent } from './../images-info/images-info.component';
import { ImagesRelatedComponent } from './../images-related/images-related.component';

@Component({
  selector: 'app-images-dialog',
  templateUrl: './images-dialog.component.html',
  styleUrls: ['./images-dialog.component.css']
})
export class ImagesDialogComponent implements OnInit {
  image: Image;
  images: Image[];

  constructor(
    @Inject(MD_DIALOG_DATA) public data: any,
    private tiqavApiService: TiqavApiService
  ) {
    this.images = data.images;
    this.image = this.getCurrentImageData(data.currentId);
  }

  ngOnInit() {
    console.log(this.image);
  }

  getCurrentImageData(id: string): Image {
    let result = new Image();
    this.images.forEach( elm => {
      if (id === elm.id) { result = elm; }
    });
    return result;
  }

  getImage(id: string, ext: string): string {
    return this.tiqavApiService.getImageUrl(id, ext);
  }

}