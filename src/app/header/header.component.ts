import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  navBarClosed: boolean;

  constructor() {
    this.navBarClosed = false;
  }

  ngOnInit(): void {}

  toggleNavbar() {
    this.navBarClosed = !this.navBarClosed;
  }
}
