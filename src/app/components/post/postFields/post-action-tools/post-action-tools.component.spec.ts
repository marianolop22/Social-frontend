import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostActionToolsComponent } from './post-action-tools.component';

describe('PostActionToolsComponent', () => {
  let component: PostActionToolsComponent;
  let fixture: ComponentFixture<PostActionToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostActionToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostActionToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
