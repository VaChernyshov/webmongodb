import { Component, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Book } from '../../models/Book';
import { BooksStore } from '../../state/book.store';
import { BookDataService } from '../../services/book-data-service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'book-table',
  templateUrl: 'book-table.component.html'
})

export class BookTableComponent implements OnInit, OnDestroy {

  @Input()
  public books: MatTableDataSource<Book>;

  public displayedColumns: string[];

  private unsub$ = new Subject();

  @HostBinding('class.book-table')
  private hostClass: boolean = true;

  constructor(
    private booksStore: BooksStore,
    private dataService: BookDataService
  ) {
  }

  ngOnInit() {
    this.booksStore.updateEntitiesStore();
    this.displayedColumns = ['title', 'description', 'isbn', 'date', 'authors', 'options'];
  }

  public deleteBook(id: string) {
    this.dataService.delete(id)
      .pipe(
        takeUntil(this.unsub$)
      ).subscribe(() => {
      this.booksStore.updateEntitiesStore();
    });
  }

  ngOnDestroy(): void {
    this.unsub$.unsubscribe();
  }

  public sort(event) {
    this.booksStore.updateEntitiesStore(event);
  }

  public setActive(id: string) {
    this.booksStore.setActive(id);
  }
}
