import { Component, Input, Directive } from '@angular/core';
import { MatDialog } from '@angular/material';

import { Image } from './../../model/image';
import { TiqavApiService } from './../../services/tiqav-api.service';
import { ImagesDialogComponent } from './../images-dialog/images-dialog.component';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent {
  @Input() images: Image[];
  constructor(private dialog: MatDialog, private tiqavApiService: TiqavApiService) {}

  getThumbnail(id: string, ext: string): string {
    return this.tiqavApiService.getThumbnailUrl(id, ext);
  }

  getImage(id: string, ext: string): string {
    return this.tiqavApiService.getImageUrl(id, ext);
  }

  onOpenDialog(id: string) {
    this.dialog.open(ImagesDialogComponent, {
      data: { currentId: id, images: this.images },
      height: '90%',
      width: '80%'
    });
  }
}
