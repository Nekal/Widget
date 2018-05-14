import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ChartModule, HIGHCHARTS_MODULES} from 'angular-highcharts';
import * as more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';

import { AppComponent } from './app.component';
import { ChartComponent } from './components/highcharts/highcharts.component';
import {FrontChartComponent} from './components/highcharts/front-chart/front-chart.component';
import {BackChartComponent} from './components/highcharts/back-chart/back-chart.component';
import {HighChartService} from './services/highcharts.service';


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
    HighChartService,
    { provide: HIGHCHARTS_MODULES, useFactory: () => [ more, exporting ] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
