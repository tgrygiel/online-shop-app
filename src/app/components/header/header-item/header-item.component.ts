import { Component, OnInit, Input } from '@angular/core';
import { Link } from 'src/app/model/Link';

@Component({
  selector: 'app-header-item',
  templateUrl: './header-item.component.html',
  styleUrls: ['./header-item.component.scss']
})
export class HeaderItemComponent implements OnInit {
  @Input() link: Link;
  constructor() { }

  ngOnInit() {
  }

}
