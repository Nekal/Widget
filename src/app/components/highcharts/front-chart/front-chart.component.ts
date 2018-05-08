import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

import { getFrontChartData } from '../../../data/front-chart.data'
import {HighChartService} from "../../../services/highcharts.service";

@Component({
  selector: 'app-front-chart',
  templateUrl: './front-chart.component.html',
  styleUrls: ['./front-chart.component.css']
})

export class FrontChartComponent {
  private chart: Chart;

  constructor(private highChartService: HighChartService) {
    this.chart = this.createChart();
  }

  createChart(): Chart {
    return new Chart({
      chart: {
        type: 'bar',
      },
      title: {
        text: '' + this.highChartService.getRevenuePercentage(getFrontChartData) + '%'
      },
      credits: {
        enabled: false
      },
      series: getFrontChartData
    });
  }
}
