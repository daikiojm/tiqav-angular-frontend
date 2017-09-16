import { Component, OnInit, Input } from '@angular/core';

import { Image } from './../../model/image';
import { TiqavApiService } from './../../services/tiqav-api.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  @Input() images: Image[];
  constructor(
    private tiqavApiService: TiqavApiService
  ) { }

  ngOnInit() {
  }

  getImage(id: string, ext: string): string {
    return this.tiqavApiService.getImageUrl(id, ext);
  }
}
