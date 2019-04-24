import { Component } from '@angular/core';
import { ListaComprasService } from 'src/app/services/lista-compras.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor( public listaService: ListaComprasService ) {

  }

}
