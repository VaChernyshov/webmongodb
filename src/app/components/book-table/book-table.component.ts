import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Book } from '../../models/Book';

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

  ngOnInit() {
    this.displayedColumns = ['title', 'description', 'isbn', 'date', 'authors'];
  }
}
