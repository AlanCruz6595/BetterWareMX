import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaginaInfo } from '../interfaces/pagina-info.interface';


@Injectable({
  providedIn: 'root'
})
export class PaginaInfoService {

  info: PaginaInfo = {};
  cargada = false;

  constructor(private http: HttpClient) { 

    //Leer archivo JSON
    this.http.get('assets/data/data-betterware.json')
        .subscribe((resp: PaginaInfo) => {
          this.cargada = true;
          this.info = resp;
          console.log(resp);
          
        })
  }
}
