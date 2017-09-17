import { Component, OnInit, Input } from '@angular/core';

import { Image } from './../../model/image';

@Component({
  selector: 'app-images-related',
  templateUrl: './images-related.component.html',
  styleUrls: ['./images-related.component.css']
})
export class ImagesRelatedComponent implements OnInit {

  @Input() image: Image;
  constructor() { }

  ngOnInit() {
  }

}
