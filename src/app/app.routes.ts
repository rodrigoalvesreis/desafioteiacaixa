import { Routes } from '@angular/router';
import { ListaComponent } from './pages/desafio/lista/lista.component';
import { DetalheComponent } from './pages/desafio/detalhe/detalhe.component';

/*
Definição de rotas das páginas
Aqui cada url digitada no browser 
será interceptada para exibir o componente (visão) correspondente
*/

export const routes: Routes = [
    { path: 'lista', component: ListaComponent, title: 'Lista' },  
    { path: 'detalhe', component: DetalheComponent, title: 'Detalhe' }, 
    { path: '',   redirectTo: '/lista', pathMatch: 'full' }
];
