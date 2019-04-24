import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class ListaComprasService {

  listas: Lista[] = [];

  constructor() {

    const list1 = new Lista('Compras Pricesmart');
    const list2 = new Lista('Compras Automercado');

    // this.listas.push( list1, list2 );
    this.cargarStorage();

  }

  crearLista( titulo: string ) {
    const nuevaLista = new Lista( titulo );

    this.listas.push( nuevaLista );
    this.guardarStorage();

    return nuevaLista.id;
  }

  obtenerLista( id: string | number ) {
    id = Number( id );
    return this.listas.find( listaData => listaData.id === id );
  }

  guardarStorage() {
    localStorage.setItem('listaCompras', JSON.stringify( this.listas ));
  }

  cargarStorage() {
    if ( localStorage.getItem('listaCompras') ) {
      this.listas = JSON.parse( localStorage.getItem('listaCompras') );
    } else {
      this.listas = [];
    }

  }

  borrarLista( lista: Lista ) {
    return this.listas = this.listas.filter( listaData => listaData.id !== lista.id );
    this.guardarStorage();
  }

 
}
