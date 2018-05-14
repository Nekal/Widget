import {Component, OnInit, Input} from '@angular/core';
import { Chart } from 'angular-highcharts';

import AxisOptions = Highcharts.AxisOptions;

import { HighChartService } from '../../../services/highcharts.service';
import { ChartData } from '../../../interfaces/chartData';

@Component({
  selector: 'app-back-chart',
  templateUrl: './back-chart.component.html',
  styleUrls: ['./back-chart.component.css']
})

export class BackChartComponent implements OnInit {
  private chart: Chart;
  @Input()  chartData: ChartData[];

  constructor(private highChartService: HighChartService) { }

  ngOnInit() {
    this.chart = this.createChart();
  }

  createChart(): Chart {
    return new Chart({
      chart: {
        type: 'column',
      },
      title: {
        text: '' + this.highChartService.getAverageForCharts(this.chartData)
      },
      credits: { enabled: false },
      series: [{ data: this.chartData }],
      legend: { enabled: false },
      yAxis: this.getYAxis(),
      xAxis: this.getXAxis()
    });
  }

  getXAxis(): AxisOptions {
    return {
      minorTickColor: 'white',
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      labels: {
        format: '{value} 17',
        step: 4
      },
    };
  }

  getYAxis(): AxisOptions {
    return {
      max: 400000,
      min: -400000,
    };
  }
}
