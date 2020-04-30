import { Component, OnInit } from '@angular/core';
import { PaginaInfoService } from 'src/app/services/pagina-info.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  initDate: number = new Date().getFullYear();

  constructor( public _pagina: PaginaInfoService ) { }

  ngOnInit(): void {
  }

}
