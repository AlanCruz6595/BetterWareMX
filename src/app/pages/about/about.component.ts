import { Component, OnInit } from '@angular/core';
import { PaginaInfoService } from 'src/app/services/pagina-info.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public infoService: PaginaInfoService) { }

  ngOnInit(): void {
  }

}
