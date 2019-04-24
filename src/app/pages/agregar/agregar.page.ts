import { Component, OnInit, ViewChild } from '@angular/core';
import { ListaComprasService } from 'src/app/services/lista-compras.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { ListaItem } from 'src/app/models/lista-item.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  @ViewChild('precio') txtPrecio;
  lista: Lista;
  nombreItem = '';
  cantidadItem = 1;
  precioItem = 0;
  total = 0;

  constructor( public listaService: ListaComprasService,
               private route: ActivatedRoute,
               private alertCtrl: AlertController ) {
    const listaId = this.route.snapshot.paramMap.get('listaId');

    this.lista = this.listaService.obtenerLista( listaId );

    this.lista.items.forEach( (data) => {
      this.total += data.totalLinea;
    });

   }

  ngOnInit() {
  }

  agregarItem() {
    if ( this.nombreItem.length === 0 ) {
      return ;
    }

    const nuevoItem = new ListaItem( this.nombreItem );

    this.lista.items.push( nuevoItem );

    this.nombreItem = '';
 
    this.listaService.guardarStorage();

  }

  async cambioCheck( item: ListaItem ) {

    const pendientes  = this.lista.items.filter( itemData => !itemData.completado ).length;

    if ( item.precio === 0 ) {
      const alert = await this.alertCtrl.create({
        header: item.desc,
        inputs: [
          {
            name: 'cantidad',
            type: 'number',
            placeholder: 'Digite la cantidad'
          },
          {
            name: 'precio',
            type: 'number',
            placeholder: 'Digite el precio'
          }
        ],
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              console.log('Cancelar');
            }
          },
          {
            text: 'Aceptar',
            handler: ( data ) => {
              console.log('data', data);
              if ( data.precio <= 0 ) {
                return;
              }

              item.cantidad = data.cantidad;
              item.precio = data.precio;
              item.totalLinea = data.cantidad * data.precio;

            }
          }
         ]
      });

      alert.present();
    } else {
      item.precio = 0;
      item.totalLinea = 0;
    }

    if ( pendientes === 0 ) {
      this.lista.terminadaEn = new Date();
      this.lista.terminada = true;
    } else {
      this.lista.terminadaEn = null;
      this.lista.terminada = false;
    }

    this.listaService.guardarStorage();

    let totalTemporal = 0;
    for(let i = 0; i < this.lista.items.length; i++) {
      totalTemporal += this.lista.items[i].totalLinea;
    }
    this.total = totalTemporal;
  }

  borrar( i: number ) {
    this.lista.items.splice(i, 1);
    this.listaService.guardarStorage();
  }

}
