import { ChangeDetectionStrategy, Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {

  @ViewChild('sidenav')
  public sidenav: MatSidenav;

  public opened: boolean = false;

  @HostBinding('class.main-host')
  private hostClass: boolean = true;

  constructor() {
  }

  ngOnInit() {
  }

  public toggleSidenav() {
    this.sidenav.toggle();
  }

}
