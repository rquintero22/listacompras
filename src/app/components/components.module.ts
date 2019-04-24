import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListasComponent } from './listas/listas.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    ListasComponent,
    MenuComponent
  ],
  exports: [
    ListasComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
