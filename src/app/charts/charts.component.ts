import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { ChartDataSets } from 'chart.js';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  
  // Bar chart
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar'as any;
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  //doughnutChart
  public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public doughnutChartData = [120, 150, 180, 90];
  public doughnutChartType = 'doughnut'as any;

  // radarChart
  public radarChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
  public radarChartData = [
    {data: [120, 130, 180, 70], label: '2017'},
    {data: [50, 150, 200, 30], label: '2018'}
  ];
  public radarChartType = 'radar'as any;

  //pie chart
  public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public pieChartData = [120, 150, 180, 90];
  public pieChartType = 'pie'as any;

  //
  public bubbleChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        ticks: {
          min: 0,
          max: 50,
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 50,
        }
      }]
    }
  };
  public bubbleChartType: ChartType = 'bubble'as any;
  public bubbleChartLegend = true;

  public bubbleChartData: ChartDataSets[] = [
    {
      data: [
        { x: 15, y: 15, r: 15 },
        { x: 25, y: 15, r: 25 },
        { x: 36, y: 12, r: 33 },
        { x: 10, y: 18, r: 18 },
      ],
      label: 'Investment Equities',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
