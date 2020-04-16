import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostImageListComponent } from './post-image-list.component';

describe('PostImageListComponent', () => {
  let component: PostImageListComponent;
  let fixture: ComponentFixture<PostImageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostImageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostImageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
