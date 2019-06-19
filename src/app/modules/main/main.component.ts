import { ChangeDetectionStrategy, Component, HostBinding, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav, MatTableDataSource } from '@angular/material';
import { BookDataService } from '../../services/book-data-service';
import { map, takeUntil, tap } from 'rxjs/operators';
import { Book } from '../../models/Book';
import { Subject } from 'rxjs';
import { BooksQuery } from '../../state/book.query';
import { BooksStore } from '../../state/book.store';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav')
  public sidenav: MatSidenav;

  public opened: boolean = false;

  public books$ = this.booksQuery.selectAll().pipe(
    tap(books => {
      console.log('books', books);
    }),
    map((books: Book[]) => {
      const bookList: Book[] = books.map((book: Book) => {
        return {
          title: book.title || '',
          description: book.description || '',
          isbn: book.isbn || '',
          date: book.date || null
        };
      });
      return new MatTableDataSource<Book>(books);
    })
  );

  private unsub$ = new Subject();

  @HostBinding('class.main-host')
  private hostClass: boolean = true;

  constructor(
    private booksQuery: BooksQuery,
    private booksStore: BooksStore,
    private dataService: BookDataService
  ) {
  }

  ngOnInit(): void {

  }

  public toggleSidenav() {
    this.sidenav.toggle();
  }

  public save(book: Book) {
    this.dataService.save(book)
      .pipe(
        takeUntil(this.unsub$)
      ).subscribe(() => {
      this.booksStore.updateEntitiesStore();
    });
    this.sidenav.toggle();
  }

  ngOnDestroy(): void {
    this.unsub$.unsubscribe();
  }

}
