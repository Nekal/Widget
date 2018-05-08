import { Component } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './highcharts.component.html',
  styleUrls: ['highcharts.component.css']
})
export class ChartComponent {
  private isFront: boolean = false;

  invertChart(): void {
    this.isFront = !this.isFront;
  }

}
