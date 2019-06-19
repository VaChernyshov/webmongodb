import { Injectable } from '@angular/core';
import { BooksStore } from './book.store';
import { BooksQuery } from './book.query';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(
    private store: BooksStore,
    private query: BooksQuery
    ) {
  }
}
