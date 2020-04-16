import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { FieldValidatorComponent } from './field-validator/field-validator.component';
import { PostHeaderComponent } from './post/postFields/post-header/post-header.component';
import { PostTextComponent } from './post/postFields/post-text/post-text.component';
import { PostFooterComponent } from './post/postFields/post-footer/post-footer.component';
import { PostActionToolsComponent } from './post/postFields/post-action-tools/post-action-tools.component';
import { PostImageComponent } from './post/postFields/post-image/post-image.component';
import { PostVideoComponent } from './post/postFields/post-video/post-video.component';

import { PipesModule } from "src/app/pipes/pipes.module";
import { PostImageListComponent } from './post/postFields/post-image-list/post-image-list.component';

@NgModule({
  declarations: [
    PostComponent,
    FieldValidatorComponent,
    PostHeaderComponent,
    PostTextComponent,
    PostFooterComponent,
    PostActionToolsComponent,
    PostImageComponent,
    PostVideoComponent,
    PostImageListComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    PostComponent,
    FieldValidatorComponent,
    PostHeaderComponent,
    PostTextComponent,
    PostFooterComponent,
    PostActionToolsComponent,
    PostImageComponent,
    PostVideoComponent,
    PostImageListComponent
  ]
})
export class ComponentsModule { }
