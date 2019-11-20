import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/model/Link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  links: Link[];
  constructor() { }

  ngOnInit() {
    this.links = [
      { to: '/home', label: 'Home'},
      { to: '/about', label: 'About'},
      { to: '/contact', label: 'Contact'},
    ];
  }

}
