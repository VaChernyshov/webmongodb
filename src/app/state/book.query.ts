import { BooksState, BooksStore } from './book.store';
import { Book } from '../models/Book';
import { QueryEntity } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { map, pairwise } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class BooksQuery extends QueryEntity<BooksState, Book> {

  public active = this.selectActive()

  constructor(public store: BooksStore) {
    super(store);
  }
}
