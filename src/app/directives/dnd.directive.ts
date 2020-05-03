import { Directive, HostListener, HostBinding, Output, EventEmitter } from '@angular/core';


@Directive({
  selector: '[appDnd]'
})
export class DndDirective {
  
  @HostBinding('class.fileover') fileOver: boolean;
  @Output() fileDropped : EventEmitter<any> = new EventEmitter()
  
  constructor() {
  }

  
  @HostListener('dragover',['$event']) onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = true;
    // console.log ('Drag Over');
  }

  @HostListener('dragleave',['$event']) public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
    // console.log ('Drag leave');
  }

  @HostListener('drop',['$event']) public ondrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();

    this.fileOver = false;
    const files = evt.dataTransfer.files;
    if (files.length > 0 ) {

      this.fileDropped.emit(files);
      // console.log ( `you droped ${files.length} files.` );
    }

  }








}
