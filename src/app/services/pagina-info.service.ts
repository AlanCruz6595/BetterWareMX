import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaginaInfoService {

  info: any = {};
  cargada = false;

  constructor(private http: HttpClient) { 

    //Leer archivo JSON
    this.http.get('assets/data/data-betterware.json')
        .subscribe(resp =>{
          this.cargada = true;
          this.info = resp;
          console.log(resp);
          
        })
  }
}
