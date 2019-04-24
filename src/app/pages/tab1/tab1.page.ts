import { Component } from '@angular/core';
import { ListaComprasService } from 'src/app/services/lista-compras.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public listaService: ListaComprasService,
               private router: Router,
               private alertCtrl: AlertController ) {

  }

  async agregarLista() {
   
    const alert = await this.alertCtrl.create({
      header: 'Crear lista',
      inputs: [
        {
          name: 'nombre',
          type: 'text',
          placeholder: 'Digite el nombre'
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
          if ( data.nombre.length === 0 ) {
            return;
          }

          // Crear la lista
          const listaId = this.listaService.crearLista( data.nombre );

          this.router.navigateByUrl(`/tabs/tab1/agregar/${ listaId }`);

          }
        }
       ]
    });

    alert.present();
  }


}
