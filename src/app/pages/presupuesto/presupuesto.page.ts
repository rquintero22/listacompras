import { Component, OnInit } from '@angular/core';
import { ListaComprasService } from 'src/app/services/lista-compras.service';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.page.html',
  styleUrls: ['./presupuesto.page.scss'],
})
export class PresupuestoPage implements OnInit {

  presupuesto: number;

  constructor( public listaCompraService: ListaComprasService ) { }

  ngOnInit() {

  }

  guardarPresupuesto( ) {
    this.listaCompraService.guardarPresupuesto( this.presupuesto );
  }

}
