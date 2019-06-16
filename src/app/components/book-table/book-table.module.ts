import { NgModule } from '@angular/core';

import { BookTableComponent } from './book-table.component';
import { CommonModule } from '@angular/common';
import { MatSortModule, MatTableModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule
  ],
  exports: [BookTableComponent],
  declarations: [BookTableComponent],
  providers: [],
})
export class BookTableModule {
}
