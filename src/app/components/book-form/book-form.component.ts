import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'book-form',
  templateUrl: 'book-form.component.html'
})

export class BookFormComponent implements OnInit {

  public formGroup: FormGroup;

  @HostBinding('class.book-form')
  private hostClass: boolean = true;

  constructor() {
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      title: new FormControl('', {
        validators: [Validators.required]
      }),
      image: new FormControl(''),
      authors: new FormControl(''),
      description: new FormControl(''),
      isbn: new FormControl('', {
        validators: [Validators.required]
      }),
      date: new FormControl('')
    });
  }
}
