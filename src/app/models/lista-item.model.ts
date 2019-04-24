export class ListaItem {
    desc: string;
    completado: boolean;
    cantidad: number;
    precio: number;
    totalLinea: number;

    constructor(desc: string ) {
        this.desc = desc;
        this.completado = false;
        this.cantidad = 1;
        this.precio = 0;
        this.totalLinea = 0;
    }

}
