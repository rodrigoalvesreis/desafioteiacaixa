import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  /*
    recuperar as fotos da api proposta
  */
  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(`https://jsonplaceholder.typicode.com/photos` , httpOptions);
  }

  /*
  recuperar as fotos específica
  */
  getPhoto(id:number): Observable<Photo> {
    return this.http.get<Photo>(`https://jsonplaceholder.typicode.com/photos/${id}` , httpOptions);
  }
  

}


//model para api Photo
export interface Photo{
  albumId : number;
  id: number;
  title: string;
  url : string;
  thumbnailUrl: string;
  liked: boolean;
  comment: string;
}