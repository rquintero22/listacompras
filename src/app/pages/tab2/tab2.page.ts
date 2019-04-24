import { Component } from '@angular/core';
import { ListaComprasService } from 'src/app/services/lista-compras.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor( public listaService: ListaComprasService ) {

  }

}
