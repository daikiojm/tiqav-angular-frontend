import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ImagesInfoComponent } from "./images-info.component";

describe("ImagesInfoComponent", () => {
  let component: ImagesInfoComponent;
  let fixture: ComponentFixture<ImagesInfoComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ImagesInfoComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
