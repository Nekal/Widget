import { Injectable } from '@angular/core';

import { ChartData } from "../interfaces/chartData";

@Injectable()
export class HighChartService {

  getRevenuePercentage(charts: ChartData[]): number {
    return Math.round(charts[0].data[0] / charts[1].data[0] * 100);
  }

  getAverageForCharts(charts: ChartData[]): number {
    const total: number = charts.reduce((total, chart: ChartData) => total + this.getSumChartData(chart), 0);
    return total / charts.length;
  }

  private getSumChartData(chart: ChartData): number {
    return chart.data.reduce((a, b) => a + b, 0);
  }
}
