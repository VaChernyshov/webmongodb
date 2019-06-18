import { NgModule } from '@angular/core';

import { BookFormComponent } from './book-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule
} from '@angular/material';
import { MaterialFileInputModule } from 'ngx-material-file-input';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MaterialFileInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  exports: [BookFormComponent],
  declarations: [BookFormComponent],
  providers: [],
})
export class BookFormModule {
}
