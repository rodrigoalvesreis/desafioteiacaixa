import { Component, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../../../modules/angular-material/angular-material.module';
import { Photo, PhotoService } from '../../../service/photo-service.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DialogEdicaoComponent } from './componentes-filhos/dialog-edicao/dialog-edicao.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

/**
 * Exibe os detalhes de Photo
 * o id do model é encaminhado via parametro de rota
 * com isso a API é consumida para retornar os dados específicos
 */
@Component({
  selector: 'app-detalhe',
  standalone: true,
  imports: [AngularMaterialModule, RouterModule, CommonModule],
  templateUrl: './detalhe.component.html',
  styleUrl: './detalhe.component.scss'
})
export class DetalheComponent implements OnInit {

  photo: Photo

  constructor(private activeRoute: ActivatedRoute, 
    private router: Router, 
    private photoService: PhotoService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.subscribeToGetPhoto(params['id'])
    }
    )
  }

  /**
   * Retorna Photo específico da API
   * @param id identificador de Photo
   */
  subscribeToGetPhoto(id: number) {
    this.photoService.getPhoto(id).subscribe(
      {
        next: (p) => { this.photo = p },
        error: (e) => { console.error(e); }
      }
    );
  }

  /**
   * Exibe a dialog de para edição de comentários
   */
  comentar(){
   this.dialog.open(DialogEdicaoComponent, {
      data: this.photo,
    });
  }

  /**
   * navega de volta para visão de lista
   */
  voltar(){
    this.router.navigate(['/lista']);
  }

  /**
   * tratamento para o clique no botão de like
   */
  like(){
    this.photo.liked = !this.photo?.liked
  }
}
