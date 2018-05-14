import { Injectable } from '@angular/core';

import { ChartData } from '../interfaces/chartData';
import { frontChartData } from '../data/front-chart.data';
import { backChartData } from '../data/back-chart.data';

@Injectable()
export class HighChartService {

  getRevenuePercentage(charts: ChartData[]): number {
    return Math.round(charts[0].data[0] / charts[1].data[0] * 100);
  }

  getAverageForCharts(charts: ChartData[]): number {
    const total: number = charts.reduce((total: number, chart: ChartData): number => total + chart.y, 0);
    return total / charts.length;
  }

  getFrontChartData(): ChartData[] {
    return frontChartData;
  }

  getBackChartData(): ChartData[] {
    return backChartData;
  }
}
