import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Image } from './../../model/image';
import { TiqavApiService } from './../../services/tiqav-api.service';

@Component({
  selector: 'app-images-related',
  templateUrl: './images-related.component.html',
  styleUrls: ['./images-related.component.css']
})
export class ImagesRelatedComponent implements OnInit {
  results: Image[] = [];
  relatedImages: Image[] = [];

  @Input() image: Image;
  @Output() idChange = new EventEmitter<string>();
  constructor(
    private tiqavApiService: TiqavApiService
  ) { }

  ngOnInit() {
    // Relatedとしてるけど実際はランダムに取ってくる...
    this.getRandomImageData();
  }

  getRandomImageData() {
    this.tiqavApiService.getRandom()
    .subscribe(
      data => this.results = data,
      err => console.log(err),
      () => {
        this.relatedImages = this.getRandomImageDataN(3);
      }
    );
  }

  getRandomImageDataN(n: number): Image[] {
    const result = [];
    const len = this.results.length;
    for (let i = 0; i < n; i++) {
      result.push(this.results[Math.floor(Math.random() * len)]);
    }
    return result;
  }

  getImage(id: string, ext: string): string {
    return this.tiqavApiService.getImageUrl(id, ext);
  }

  getThumbnail(id: string, ext: string): string {
    return this.tiqavApiService.getThumbnailUrl(id, ext);
  }

  onClickImage(id: string) {
    this.idChange.emit(id);
    this.getRandomImageData();
  }
}
