import { HttpClient } from '@angular/common/http';
import { Book } from '../models/Book';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

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
    // console.log('book1', book.image.files[0]);


    // const fileReader = new FileReader();
    // fileReader.readAsArrayBuffer(book.image.files[0]);

    // const sss = Observable.create((observer: Subscriber<Book>) => {
    //   fileReader.onload = ((ev: ProgressEvent): void => {
    //     book.image = fileReader.result;
    //     observer.next(book);
    //     observer.complete();
    //   })
    // });
    // console.log('book2', book);
    return this.http.post<Book>('http://localhost:8000/', book);
  }
}
