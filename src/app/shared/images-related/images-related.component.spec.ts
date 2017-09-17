import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesRelatedComponent } from './images-related.component';

describe('ImagesRelatedComponent', () => {
  let component: ImagesRelatedComponent;
  let fixture: ComponentFixture<ImagesRelatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesRelatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesRelatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
