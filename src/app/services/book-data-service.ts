import { HttpClient } from '@angular/common/http';
import { Book } from '../models/Book';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { readFileAsBase64 } from '@webacad/observable-file-reader';
import { flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:8000/');
  }

  public save(book: Book): Observable<Book> {
    return readFileAsBase64(book.image.files[0]).pipe(
      flatMap((fileData) => {
        book.image = fileData;
        return this.http.post<Book>('http://localhost:8000/', book);
      })
    );
  }

  public delete(id: string) {
    return this.http.delete<void>('http://localhost:8000/' + id);
  }

}
