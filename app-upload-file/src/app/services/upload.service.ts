import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private _http: HttpClient) { }

  subirArchivo(formData) {
    const urlApi = 'http://localhost:3000/api/upload';
    return this._http.post(urlApi, formData);
  }
}
