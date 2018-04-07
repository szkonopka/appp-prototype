import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
