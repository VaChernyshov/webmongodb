import { NgModule } from '@angular/core';

import { MainComponent } from './main.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookFormModule } from '../../components/book-form.module';
import { MatButtonModule, MatSidenavModule } from '@angular/material';

@NgModule({
  imports: [
    MatSidenavModule,
    CommonModule,
    BrowserAnimationsModule,
    BookFormModule,
    MatButtonModule
  ],
  exports: [MainComponent],
  declarations: [MainComponent],
  providers: [],
})
export class MainModule {
}
