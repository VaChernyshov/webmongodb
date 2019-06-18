import { ChangeDetectionStrategy, Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { MatSidenav, MatTableDataSource } from '@angular/material';
import { BookDataService } from '../../services/book-data-service';
import { map, takeUntil } from 'rxjs/operators';
import { Book } from '../../models/Book';
import { Subject } from 'rxjs';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {
  @ViewChild('sidenav')
  public sidenav: MatSidenav;

  public opened: boolean = false;

  private unsub$ = new Subject();
  public books$ = this.dataService.getAll().pipe(
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

  @HostBinding('class.main-host')
  private hostClass: boolean = true;

  constructor(private dataService: BookDataService) {
  }

  ngOnInit(): void {

  }

  public toggleSidenav() {
    this.sidenav.toggle();
  }

  public save(book: Book) {
    this.dataService.save(book).subscribe();
    this.sidenav.toggle();
  }

}
