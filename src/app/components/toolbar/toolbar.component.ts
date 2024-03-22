import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../modules/angular-material/angular-material.module';


/**
 * Componente toolbar 
 * aqui podemos inserir as ações/ferramentas que estarão disponíveis para os usuários
 */
@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [AngularMaterialModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

}
