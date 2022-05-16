import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-highcharts',
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.css']
})
export class HighchartsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    title: {
      text: ''
    },
    xAxis: {
      categories: ['USD', 'EUR', 'JPY', 'BRL']
    },
    series: [{
      type: 'spline',
      name: 'USD',
      data: [0.9629272989889264, 1.0, 128.94559460760712, 5.123158401540684]
    },
    {
      type: 'spline',
      name: 'EUR',
      data: [1.0, 1.0385, 133.91, 5.3204]
    },
    {
      type: 'spline',
      name: 'JPY',
      data: [0.007467702188036741, 0.007755208722276156, 1.0, 0.03973116272123068]
    },
    {
      type: 'spline',
      name: 'BRL',
      data: [0.18795579279753402, 0.19519209082023906, 25.169160213517777, 1.0]
    },
      // {
      //   type: 'spline',
      //   name: 'Average',
      //   data: [3, 2.67, 3, 6.33, 3.33],
      //   marker: {
      //     lineWidth: 2,
      //     lineColor: '',
      //     fillColor: 'white'
      //   }
      // }
    ]
  }

}
