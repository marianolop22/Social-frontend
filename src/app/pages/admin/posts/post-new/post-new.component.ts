import { Component, OnInit } from '@angular/core';
import { Template } from 'src/app/models/template.model';
import { NewsService } from 'src/app/services/news.service';
import { Post } from 'src/app/models/post.model';
import { Group } from 'src/app/models/group.model';
import { log } from 'util';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';


declare var CRUMINA:any; //  init_plugins();

@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.css']
})
export class PostNewComponent implements OnInit {


  public mainImage: string|ArrayBuffer;
  public imageList:Array<string|ArrayBuffer>;
  public templateList: Array<Template> = new Array<Template> ();
  public distributionGroupList: Array<Group> = new Array<Group> ();
  public post: Post;
  public tmpDistributionGroup: Array<string> = new Array<string>();


  constructor(
    private _news: NewsService
  ) {

    this.post = new Post();
    this.post.idTemplate = "1";

    this.imageList = new Array<string|ArrayBuffer>();







    // this._news.getDistributionGroupList ().subscribe (
    //   (response:any) => {
    //     this.distributionGroupList = response;
    //     console.log ( this.distributionGroupList );
        
    //   }
    // );
    // this._news.getTemplateList ().subscribe (
    //   (response: Array <Template>) => {
    //     this.templateList = response;
    //     console.log ( this.templateList );
        
    //   }
    // );


  }

  ngOnInit(): void {

    forkJoin ([
      this._news.getDistributionGroupList (),
      this._news.getTemplateList ()
    ]).subscribe (
      response => {
        console.log ( response);

        this.distributionGroupList = response[0];
        this.templateList = response[1];

        CRUMINA.init_plugins();
        CRUMINA.init_lib_plugins();
      }
    );
    


    
  }

  onFileDropped ( event ) {
    console.log ('evento ', event);
    // const file = event[0];
    // const reader = new FileReader();

    // reader.readAsDataURL(file);
    // reader.onload = e => {
    //   this.mainImage = reader.result;
    // }


    this.getFile (event, 'list');
  }


  getFile ( event, from:string ) {

    console.log ('evento ', event);

    let fileList: FileList;

    if ( event instanceof FileList) {
      fileList = event;
    } else {
      fileList = event.target.files;
    }


    if ( fileList ) {
      // if ( ( event.target.files.length + this.customFileList.getTotalFiles() ) > environment.newsConf.maxUpload )  {
      //   alert (`No se pueden adjuntar más de ${environment.newsConf.maxUpload} imágenes` );
      //   return
      // }

      //let imagesToUpload = event.target.files.length;
      //this.spinner.show ();

      let imgUploaded:number = 0; //Este flag es para controlar que se cargaron las imagenes pedidas y luego habilitar la web

      for ( let i = 0 ; i < fileList.length ; i++ ) {
        // if ( !this.checkFile (event.target.files[i]) ) {
        //   this._notifications.error( "", `El archivo debe ser una imagen y tener un tamaño menor a ${environment.newsConf.maxSize / 1024} mb.` );
        //   this.spinner.hide ();
        //   return;
        // }

        //let imageFile:CustomFile = new CustomFile ();
        const file = fileList[i];
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = e => {
          if ( from == 'list' ) {

            this.imageList.push (reader.result);
          } else {

            this.mainImage = reader.result;
          }
          
        }





        //Esto es para subir GIFs
        // if ( file.type.indexOf ('gif') > -1 )  {
        //   reader.readAsDataURL(file);
        //   reader.onload = e => {
        //     imageFile.image = reader.result
        //     imageFile.nameImage = event.target.files[i].name;
        //     imageFile.thumbnail = reader.result
        //     imageFile.nameThumbnail = event.target.files[i].name;
        //     this.customFileList.setFile ( imageFile );
        //     if ( ( imgUploaded + 1 ) == imagesToUpload ) {
        //       this.spinner.hide ();
        //     }
        //     imgUploaded++;
        //   }
        // } else {

        // this._ng2ImgMax.resizeImage( file, 1024, 1024 ).subscribe(
        //   result => {
        //     reader.readAsDataURL(result);
        //     reader.onload = e => {
        //       imageFile.image = reader.result
        //       imageFile.nameImage = event.target.files[i].name;

        //       this._ng2ImgMax.resizeImage( file, 150, 150 ).subscribe(
        //         result => {
        //           reader.readAsDataURL(result);
        //           reader.onload = e => {
        //             imageFile.thumbnail = reader.result
        //             imageFile.nameThumbnail = event.target.files[i].name;
        //             this.customFileList.setFile ( imageFile );
        //             if ( ( imgUploaded + 1 ) == imagesToUpload ) {
        //               this.spinner.hide ();
        //             }
        //             imgUploaded++;

        //           }
        //         },
        //         error => {
        //           console.log('error', error);
        //           this.spinner.hide ();
        //         }
        //       );
        //     }
        //   },
        //   error => {
        //     console.log('error', error);
        //     this.spinner.hide ();
        //   }
        // );

        // }



      }
    }



  }

  delete ( index: number) {

    console.log ('borro la imagen');

    this.imageList.splice (index, 1);
  }

  setTemplate (event) {
    console.log( event );
    console.log( this.post );
    
 
  }

  setDistributionGroup (event) {
    this.post.distributionGroup = new Array<Group>();
    for ( let group of this.tmpDistributionGroup ) {
      this.post.distributionGroup.push ( <Group>{idGroup: group, name:"" } );
    }
  }


}
