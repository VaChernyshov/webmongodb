import { Component, HostBinding, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Book } from '../../models/Book';

@Component({
  selector: 'book-table',
  templateUrl: 'book-table.component.html'
})

export class BookTableComponent implements OnInit {

  public displayedColumns: string[];

  public tempData: MatTableDataSource<Book>;

  @HostBinding('class.book-table')
  private hostClass: boolean = true;

  constructor() {
  }

  ngOnInit() {
    this.displayedColumns = ['title'];
    const data: Book[] = [
      {
        title: 'TITLE'
      }
    ];

    this.tempData = new MatTableDataSource<Book>(data);
  }
}
