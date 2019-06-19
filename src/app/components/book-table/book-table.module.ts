import { NgModule } from '@angular/core';

import { BookTableComponent } from './book-table.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatSortModule, MatTableModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule
  ],
  exports: [BookTableComponent],
  declarations: [BookTableComponent],
  providers: [],
})
export class BookTableModule {
}
