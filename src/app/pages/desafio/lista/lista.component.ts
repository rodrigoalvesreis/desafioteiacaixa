import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularMaterialModule } from '../../../modules/angular-material/angular-material.module';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { Photo, PhotoService } from '../../../service/photo-service.service';
import { Router} from '@angular/router';

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

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort; 
  }

  subscribeToPhotoList(){
    this.photoService.getPhotos().subscribe(
      {
        next: (v) => this.dataSource.data = v,
        error: (e) => console.error(e),
      }
    );
  }

  goToDetails(data: Photo){
    this.router.navigate(['/detalhe', {"id": data.id}])
  }

}



