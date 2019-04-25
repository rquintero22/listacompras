import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from 'src/app/models/componentes.model';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  menuOpts: Observable<Componente[]>;

  constructor( private menuCtrl: MenuController,
               public dataService: DataService ) {
    this.menuOpts = this.dataService.getMenuOpts();
                }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }


}

