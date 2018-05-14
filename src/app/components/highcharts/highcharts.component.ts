import { Component } from '@angular/core';

import { HighChartService } from '../../services/highcharts.service';
import { ChartData } from '../../interfaces/chartData';

@Component({
  selector: 'app-chart',
  templateUrl: './highcharts.component.html',
  styleUrls: ['highcharts.component.css']
})

export class ChartComponent {
  private isFront = false;
  private frontChartData: ChartData[];
  private backChartData: ChartData[];

  constructor(private highChartService: HighChartService) {
    this.frontChartData = this.highChartService.getFrontChartData();
    this.backChartData = this.highChartService.getBackChartData();
  }
  invertChart(): void {
    this.isFront = !this.isFront;
  }
}
