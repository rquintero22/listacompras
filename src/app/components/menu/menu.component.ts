import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/models/componentes.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  menuOpts: Observable<Componente[]>;

  constructor( public dataService: DataService ) {
   }

  ngOnInit() {
    this.menuOpts = this.dataService.getMenuOpts();
  }

}
