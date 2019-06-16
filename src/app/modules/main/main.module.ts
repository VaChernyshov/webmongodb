import { NgModule } from '@angular/core';

import { MainComponent } from './main.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookFormModule } from '../../components/book-form/book-form.module';
import { MatButtonModule, MatSidenavModule } from '@angular/material';
import { BookTableModule } from '../../components/book-table/book-table.module';
import { BookDataService } from '../../services/book-data-service';

@NgModule({
  imports: [
    MatSidenavModule,
    CommonModule,
    BrowserAnimationsModule,
    BookFormModule,
    MatButtonModule,
    BookTableModule
  ],
  exports: [MainComponent],
  declarations: [MainComponent],
  providers: [BookDataService],
})
export class MainModule {
}
