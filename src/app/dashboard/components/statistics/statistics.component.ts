import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.sass']
})
export class StatisticsComponent implements OnInit {
  total: number = 100;
  productivity: number = 85;

  constructor() { }

  ngOnInit() {
    //this.setPieChart('.pie');
  }

  setPieChart(name: string) {
    let pie = document.querySelector(name)[0];
    let result = this.productivity + ' ' + this.total;
    //pie.style.strokeDasharray = result;
  }

}
