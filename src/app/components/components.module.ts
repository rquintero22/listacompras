import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

// Componentes
import { ListasComponent } from './listas/listas.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

// Pipes
import { PipesModule } from '../pipes/pipes.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    ListasComponent,
    MenuComponent
  ],
  exports: [
    HeaderComponent,
    ListasComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
