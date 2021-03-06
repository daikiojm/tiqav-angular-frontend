import { Component, Input } from '@angular/core';

import { Image } from './../../model/image';
import { TiqavApiService } from './../../services/tiqav-api.service';
import { environment } from './../../../environments/environment.prod';

@Component({
  selector: 'app-images-info',
  templateUrl: './images-info.component.html',
  styleUrls: ['./images-info.component.css']
})
export class ImagesInfoComponent {
  @Input() image: Image;
  @Input() tags: string[];
  constructor(private tiqavApiService: TiqavApiService) {}

  getNakedImageUrl(): string {
    return this.tiqavApiService.getImageUrl(this.image.id, this.image.ext);
  }

  // リンク先は本家tiqav
  geImageLink(): string {
    const imageUrl = this.getNakedImageUrl();
    // <a href="http://tiqav.com/2zR" target="_blank"><img alt="2zr" src="http://tiqav.com/2zR.jpg" /></a>
    const _tag = `<a href="${environment.tiqav}/${this.image.id}" target="_blank"><img alt="${this.image.id}" src="${imageUrl}" /></a>`;
    return _tag;
  }

  // リンク先は本家tiqav
  getMarkdown(): string {
    const thumbnailUrl = this.tiqavApiService.getThumbnailUrl(this.image.id, this.image.ext);
    const _tags = this.tags.length !== 0 ? this.tags.join(' ') : '';
    // [![おまたせ ごめんなさい](http://tiqav.com/1ZJ.th.jpg)](http://tiqav.com/1ZJ)
    const _markdown = `[![${_tags}](${thumbnailUrl})](${environment.tiqav}/${this.image.id})`;
    return _markdown;
  }
}
