import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Photo } from '../../../../../service/photo-service.service';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularMaterialModule } from '../../../../../modules/angular-material/angular-material.module';
import { CommonModule } from '@angular/common';

/**
 * Janela para edição de comentário a respeito de Photo
 */
@Component({
  selector: 'app-dialog-edicao',
  standalone: true,
  imports: [AngularMaterialModule, ReactiveFormsModule, CommonModule],
  templateUrl: './dialog-edicao.component.html',
  styleUrl: './dialog-edicao.component.scss'
})
export class DialogEdicaoComponent{
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Photo,
    public dialogRef: MatDialogRef<DialogEdicaoComponent>,
    private snackBar: MatSnackBar
    ) { }  

  /**
   * Controle para validação do comentário
   */
  comment = new FormControl(this.data.comment, Validators.required)

  /**
   * Salva o comentário
   */
  salvar(){
    if(!this.comment.invalid){
      this.data.comment = String(this.comment.value)
      this.snackBar.open('Comentário salvo!', 'Ok')
    }
    else{
      this.snackBar.open('Comentário não pode ser vazio!', 'Ok')
    }
  }
  
  /**
   * Fecha a janela sem salvar o comentário
   */
  voltar(){
    this.dialogRef.close();
  }
}
