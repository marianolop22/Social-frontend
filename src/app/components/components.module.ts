import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { FieldValidatorComponent } from './field-validator/field-validator.component';
import { PostHeaderComponent } from './post/postFields/post-header/post-header.component';
import { PostTextComponent } from './post/postFields/post-text/post-text.component';
import { PostFooterComponent } from './post/postFields/post-footer/post-footer.component';
import { PostActionToolsComponent } from './post/postFields/post-action-tools/post-action-tools.component';
import { PostImageComponent } from './post/postFields/post-image/post-image.component';



@NgModule({
  declarations: [
    PostComponent,
    FieldValidatorComponent,
    PostHeaderComponent,
    PostTextComponent,
    PostFooterComponent,
    PostActionToolsComponent,
    PostImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PostComponent,
    FieldValidatorComponent,
    PostHeaderComponent,
    PostTextComponent,
    PostFooterComponent,
    PostActionToolsComponent,
    PostImageComponent
  ]
})
export class ComponentsModule { }
