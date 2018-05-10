import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

import { getBackChartData } from '../../../data/back-chart.data'
import {HighChartService} from '../../../services/highcharts.service';

@Component({
  selector: 'app-back-chart',
  templateUrl: './back-chart.component.html',
  styleUrls: ['./back-chart.component.css']
})

export class BackChartComponent {
  private chart: Chart;

  constructor(private highChartService: HighChartService) {
    this.chart = this.createChart();
  }

  createChart(): Chart {
    return new Chart({
      chart: {
        type: 'column',
      },
      title: {
        text: '' + this.highChartService.getAverageForCharts(getBackChartData)
      },
      credits: {
        enabled: false
      },
      series: getBackChartData,
      xAxis: {
        visible: false
      },
      yAxis: {
        visible: false,
        stackLabels: {
          enabled: true,
          style: {
            fontWeight: 'bold',
          }
        }
      }
    });
  }
}
