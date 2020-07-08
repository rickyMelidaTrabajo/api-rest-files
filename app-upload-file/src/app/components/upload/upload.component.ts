import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  uploadFile: Array<File>;
  public datos: any;
  data: any;

  constructor(private _uploadService: UploadService) { 
    this.datos = {
      nonbre: '',
      artista: ''
    }

    this.data = {
      sale: 'este sale'
    }
  }

  ngOnInit(): void {
  }

  onUpload() {
    const formData = new FormData();
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.uploadFile.length; i++) {
      formData.append('upload', this.uploadFile[i], this.uploadFile[i].name);
      formData.append('data', this.data);
    }
    // for(let i=0; i< this.datos.length; i++) {

    
    // Llamar al servicio
    this._uploadService.subirArchivo(formData).subscribe(
      res => {
        console.log('Respuesta: ' + res);
      },
      err => {
        console.log('Ha ocurrido un horror al subir!!');
      }
    );

    console.log(this.datos);
  }

  onFileChange(event) {
    // Asignamos el evento el archivo a la variable de tipo File
    this.uploadFile = event.target.files;
  }
}
