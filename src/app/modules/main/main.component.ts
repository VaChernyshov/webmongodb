import { ChangeDetectionStrategy, Component, HostBinding, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav, MatTableDataSource } from '@angular/material';
import { BookDataService } from '../../services/book-data-service';
import { filter, map, takeUntil, tap } from 'rxjs/operators';
import { Book } from '../../models/Book';
import { Subject } from 'rxjs';
import { BooksQuery } from '../../state/book.query';
import { BooksStore } from '../../state/book.store';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnDestroy {
  @ViewChild('sidenav')
  public sidenav: MatSidenav;

  public opened: boolean = false;

  public active$ = this.booksQuery.selectActive()
    .pipe(
      filter(book => !!book),
      tap(() => {
        this.sidenav.opened = true;
      })
    );

  public books$ = this.booksQuery.selectAll().pipe(
    map((books: Book[]) => {
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

  public toggleSidenav() {
    this.sidenav.toggle();
    !this.sidenav.opened && this.booksStore.setActive(null);
  }

  public save(book: Book) {
    this.dataService.save(book)
      .pipe(
        takeUntil(this.unsub$)
      ).subscribe(() => {
      this.booksStore.updateEntitiesStore();
    });
    this.sidenav.opened = false;
    this.booksStore.setActive(null);
  }

  public update(book: Book) {
    this.dataService.update(book.id, book)
      .pipe(
        takeUntil(this.unsub$)
      ).subscribe(() => {
      this.booksStore.updateEntitiesStore();
    });
    this.sidenav.opened = false;
    this.booksStore.setActive(null);
  }

  ngOnDestroy(): void {
    this.unsub$.unsubscribe();
  }
}
