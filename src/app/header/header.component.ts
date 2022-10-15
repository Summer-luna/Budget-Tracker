import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  navBarClosed: boolean;
  isClicked: boolean;

  constructor() {
    this.navBarClosed = false;
    this.isClicked = false;
  }

  ngOnInit(): void {}

  toggleNavbar() {
    this.navBarClosed = !this.navBarClosed;
  }
}
