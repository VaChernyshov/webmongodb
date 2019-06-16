import { HttpClient } from '@angular/common/http';
import { Book } from '../models/Book';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:8000/');
  }
}
