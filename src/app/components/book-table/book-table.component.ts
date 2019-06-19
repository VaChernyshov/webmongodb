import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Book } from '../../models/Book';
import { BookDataService } from '../../services/book-data-service';

@Component({
  selector: 'book-table',
  templateUrl: 'book-table.component.html'
})

export class BookTableComponent implements OnInit {

  @Input()
  public books: MatTableDataSource<Book>;

  public displayedColumns: string[];

  @HostBinding('class.book-table')
  private hostClass: boolean = true;

  constructor(private dataService: BookDataService) {
  }


  ngOnInit() {
    this.displayedColumns = ['title', 'description', 'isbn', 'date', 'authors'];
  }

  public deleteBook(id: string) {
    this.dataService.delete(id).subscribe()
  }
}
