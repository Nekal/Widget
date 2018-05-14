import {Component, Input, OnInit} from '@angular/core';
import { Chart } from 'angular-highcharts';

import PlotOptions = Highcharts.PlotOptions;

import {HighChartService} from '../../../services/highcharts.service';
import {ChartData} from '../../../interfaces/chartData';

@Component({
  selector: 'app-front-chart',
  templateUrl: './front-chart.component.html',
  styleUrls: ['./front-chart.component.css']
})

export class FrontChartComponent implements OnInit {
  private chart: Chart;
  @Input() chartData: ChartData[];

  constructor(private highChartService: HighChartService) { }

  ngOnInit() {
    this.chart = this.createChart();
  }

  createChart(): Chart {
    return new Chart({
      chart: {
        type: 'column',
        inverted: true,
        height: 200,
        marginTop: 80
      },
      title: {
        text: '' + this.highChartService.getRevenuePercentage(this.chartData) + '%'
      },
      credits: {
        enabled: false
      },
      plotOptions: this.getPlotOptions(),
      series: this.chartData,
      xAxis: { visible: false },
      yAxis: {
        title: { text: null },
        gridLineColor: 'white'
      }
    });
  }

  getPlotOptions(): PlotOptions {
    return  {
      column: {
        grouping: false,
        borderWidth: 0,
        borderRadius: 5,
      },
    };
  }
}
