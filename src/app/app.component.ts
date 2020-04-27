import { Component } from '@angular/core';
import { PaginaInfoService } from './services/pagina-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(public paginaInfoService: PaginaInfoService){

  }
}
