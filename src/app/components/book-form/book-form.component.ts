import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'book-form',
  templateUrl: 'book-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BookFormComponent implements OnInit {

  public formGroup: FormGroup;

  @Output()
  public onClick = new EventEmitter();

  @HostBinding('class.book-form')
  private hostClass: boolean = true;

  constructor() {
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      title: new FormControl('', {
        validators: [Validators.required]
      }),
      image: new FormControl(null),
      authors: new FormControl(''),
      description: new FormControl(''),
      isbn: new FormControl(''),
      date: new FormControl('')
    });
  }

  private _onClick(event: MouseEvent) {
    this.onClick.emit(event);
  }
}
