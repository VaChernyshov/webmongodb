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

  public getAll(sort: any): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:8000/' + (sort && `${sort.active}/${sort.direction === 'asc' ? -1 : 1}` || 'title/1'));
  }

  public save(book: Book): Observable<Book> {
    if (book.image) {
      return readFileAsBase64(book.image.files[0]).pipe(
        flatMap((fileData) => {
          book.image = fileData;
          return this.http.post<Book>('http://localhost:8000/', book);
        })
      );
    }
    return this.http.post<Book>('http://localhost:8000/', book);
  }

  public delete(id: string): Observable<Book> {
    return this.http.delete<Book>('http://localhost:8000/' + id);
  }

  public update(id: string, book: Book): Observable<Book> {
    delete book.id;
    if (book.image) {
      return readFileAsBase64(book.image.files[0]).pipe(
        flatMap((fileData) => {
          book.image = fileData;
          return this.http.put<Book>('http://localhost:8000/' + id, book);
        })
      );
    }
    return this.http.put<Book>('http://localhost:8000/' + id, book);
  }

}
