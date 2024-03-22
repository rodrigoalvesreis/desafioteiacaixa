import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularMaterialModule } from '../../../modules/angular-material/angular-material.module';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Photo, PhotoService } from '../../../service/photo-service.service';
import { Router} from '@angular/router';

/**
 * Lista um conjuto de Photo retornado da api
 * aqui a MatTable facilita todo trabalho de ordenação e paginação proposto no desafio 
 */
@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [AngularMaterialModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent implements OnInit {
 

  displayedColumns: string[] = ['title', 'thumbnail'];
  dataSource = new MatTableDataSource<Photo>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private photoService : PhotoService, private router : Router){}

  ngOnInit(): void {
    this.subscribeToPhotoList();
  }

  /**
   * inicializa a paginação e ordenação
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort; 
  }

  /**
   * Consome a api via HttpClient e pattern Observer
   */
  subscribeToPhotoList(){
    this.photoService.getPhotos().subscribe(
      {
        next: (v) => this.dataSource.data = v,
        error: (e) => console.error(e),
      }
    );
  }

  /**
   * Navega para a visão "detalhe"
   * @param data identificador de Photo
   */
  goToDetails(data: Photo){
    this.router.navigate(['/detalhe', {"id": data.id}])
  }

}



