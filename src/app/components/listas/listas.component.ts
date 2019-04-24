import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ListaComprasService } from 'src/app/services/lista-compras.service';
import { Lista } from 'src/app/models/lista.model';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @ViewChild( IonList ) lista: IonList;
  @Input() terminada = true;

  constructor( public listaService: ListaComprasService,
               private router: Router,
               private alertCtrl: AlertController ) { }

  ngOnInit() {}

  listaSeleccionada( compra: Lista ) {
    if ( this.terminada ) {
      this.router.navigateByUrl(`/tabs/tab2/agregar/${ compra.id }`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/agregar/${ compra.id }`);
    }
  }

  borrarLista( lista: Lista ) {
    this.listaService.borrarLista( lista );
  }

  async editarLista( lista: Lista ) {
    const alert = await this.alertCtrl.create({
      header: 'Editar lista',
      inputs: [
        {
          name: 'nombre',
          type: 'text',
          value: lista.titulo,
          placeholder: 'Digite el nombre'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
            this.lista.closeSlidingItems();
          }
        },
        {
          text: 'Actualizar',
          handler: ( data ) => {
          if ( data.nombre.length === 0 ) {
            return;
          }

          lista.titulo = data.nombre;

          this.listaService.guardarStorage();
          this.lista.closeSlidingItems();

          // Crear la lista
          // const listaId = this.listaService.crearLista( data.nombre );

          }
        }
       ]
    });

    alert.present();
  }

}
