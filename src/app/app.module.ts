import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule } from 'angular-highcharts';

import { AppComponent } from './app.component';
import { ChartComponent } from './components/highcharts/highcharts.component';
import {FrontChartComponent} from "./components/highcharts/front-chart/front-chart.component";
import {BackChartComponent} from "./components/highcharts/back-chart/back-chart.component";
import {HighChartService} from "./services/highcharts.service";


@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    FrontChartComponent,
    BackChartComponent
  ],
  imports: [
    BrowserModule,
    ChartModule
  ],
  providers: [
    HighChartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
