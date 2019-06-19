import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BooksQuery } from '../../state/book.query';
import { filter, takeUntil, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'book-form',
  templateUrl: 'book-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BookFormComponent implements OnInit {

  public formGroup: FormGroup;

  private unsub$ = new Subject();
  public active$ = this.booksQuery.active
    .pipe(
      filter(book => !!book),
      tap(book => {
        this.formGroup.patchValue(book)
      })
    );

  @Output()
  public onClick = new EventEmitter();

  @HostBinding('class.book-form')
  private hostClass: boolean = true;

  constructor(
    private fb: FormBuilder,
    private booksQuery: BooksQuery
  ) {
  }

  get authors() {
    return this.formGroup.get('authors') as FormArray;
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      title: new FormControl('', {
        validators: [Validators.required]
      }),
      image: new FormControl(null),
      id: new FormControl(null),
      authors: this.fb.array([
        this.fb.control('')
      ]),
      description: new FormControl(''),
      isbn: new FormControl(''),
      date: new FormControl('')
    });

    this.active$
      .pipe(
        takeUntil(this.unsub$)
      ).subscribe();
  }

  public addAuthors() {
    this.authors.push(this.fb.control(''));
  }

  private _onClick(event: MouseEvent) {
    this.onClick.emit(event);
    this.formGroup.reset();
  }
}
