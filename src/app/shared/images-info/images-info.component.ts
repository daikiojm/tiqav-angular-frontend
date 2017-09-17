import { Component, OnInit, Input } from '@angular/core';

import { Image } from './../../model/image';

@Component({
  selector: 'app-images-info',
  templateUrl: './images-info.component.html',
  styleUrls: ['./images-info.component.css']
})
export class ImagesInfoComponent implements OnInit {

  @Input() image: Image;
  constructor() { }

  ngOnInit() {
  }

}
