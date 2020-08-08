import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaginaInfo } from '../interfaces/pagina-info.interface';


@Injectable({
  providedIn: 'root'
})
export class PaginaInfoService {

  info: PaginaInfo = {};
  cargada = false;

  equipo: any[] = [];

  constructor(private http: HttpClient) { 

    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo(){
    //Leer archivo JSON
    this.http.get('assets/data/data-laCroix.json')
  
    .subscribe((resp: PaginaInfo) => {
      this.cargada = true;
      this.info = resp;
      
      
    });
  }
  private cargarEquipo(){
    //Leer archivo JSON
    this.http.get('https://perfumes-html.firebaseio.com/equipo.json')
  
    .subscribe((resp: any) => {
      this.equipo = resp;
      console.log(resp);
    });

  }
}
