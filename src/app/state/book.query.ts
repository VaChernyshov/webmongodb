import { BooksState, BooksStore } from './book.store';
import { Book } from '../models/Book';
import { QueryEntity } from '@datorama/akita';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class BooksQuery extends QueryEntity<BooksState, Book> {
  constructor(protected store: BooksStore) {
    super(store);
  }
}
