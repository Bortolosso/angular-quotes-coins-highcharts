import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';

HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);

//Service
import { QuotesCoins } from "./service/api_quote_coins.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  readonly apiURL: string | undefined;
  public selectedValPeriod: string | undefined;
  public selectedValCoin: string | undefined;
  dataReturn: any = {};
  isPrintinginProgress = true;
  categories = [];
  categories_period: any = [];
  coin_obj_selected: any = [];
  name_series_1 = "";
  name_series_2 = "";
  name_series_3 = "";
  data_series_1 = [];
  data_series_2 = [];
  data_series_3 = [];

  constructor(
    private quotesService: QuotesCoins,
  ) { };

  ngOnInit(): void {
    this.selectedValPeriod = '5days';
    this.selectedValCoin = 'USD';
    this.getDataNotices();
  };

  public onValChangePeriod(valPeriod: string) {
    this.selectedValPeriod = valPeriod;
    this.insertDataGraphCoin();
  };

  public onValChangeCoin(valCoin: string) {
    this.selectedValCoin = valCoin;
    this.insertDataGraphCoin();
  };

  getDataNotices() {
    this.quotesService.getApi().subscribe((returnApi: any) => {
      this.dataReturn = returnApi;
      this.insertDataGraphCoin()
    }, error => {
      console.log(error);
    });
  };

  insertDataGraphCoin() {
    this.isPrintinginProgress = false;
    this.categories = this.dataReturn.series_date;

    if (this.selectedValCoin == "USD") {
      this.coin_obj_selected = this.dataReturn['USD'];
      this.name_series_1 = "EUR";
      this.name_series_2 = "JPY";
      this.name_series_3 = "BRL";

      this.data_series_1 = this.coin_obj_selected.EUR;
      this.data_series_2 = this.coin_obj_selected.JPY;
      this.data_series_3 = this.coin_obj_selected.BRL;
    };

    if (this.selectedValCoin == "EUR") {
      this.coin_obj_selected = this.dataReturn['EUR'];
      this.name_series_1 = "USD";
      this.name_series_2 = "JPY";
      this.name_series_3 = "BRL";

      this.data_series_1 = this.coin_obj_selected.USD
      this.data_series_2 = this.coin_obj_selected.JPY
      this.data_series_3 = this.coin_obj_selected.BRL
    };

    if (this.selectedValCoin == "JPY") {
      this.coin_obj_selected = this.dataReturn['JPY'];
      this.name_series_1 = "USD";
      this.name_series_2 = "EUR";
      this.name_series_3 = "BRL";

      this.data_series_1 = this.coin_obj_selected.USD
      this.data_series_2 = this.coin_obj_selected.EUR
      this.data_series_3 = this.coin_obj_selected.BRL
    };

    if (this.selectedValCoin == "BRL") {
      this.coin_obj_selected = this.dataReturn['BRL'];
      this.name_series_1 = "USD";
      this.name_series_2 = "EUR";
      this.name_series_3 = "JPY";

      this.data_series_1 = this.coin_obj_selected.USD
      this.data_series_2 = this.coin_obj_selected.EUR
      this.data_series_3 = this.coin_obj_selected.JPY
    };

    this.createChartLine();
  };

  private createChartLine(): void {
    const chart = Highcharts.chart('chart-line', {
      title: {
        text: 'Gráfico de Cotação Moedas',
      },
      xAxis: {
        categories: this.categories
      },
      credits: {
        enabled: true,
      },
      legend: {
        enabled: true,
      },
      yAxis: {
        title: {
          text: null,
        }
      },
      tooltip: {
        pointFormat: `<div>{series.name}: {point.y}</div>`,
        shared: true,
        useHTML: true,
      },
      series: [{
        type: 'spline',
        name: this.name_series_1,
        data: this.data_series_1
      }, {
        type: 'spline',
        name: this.name_series_2,
        data: this.data_series_2
      }, {
        type: 'spline',
        name: this.name_series_3,
        data: this.data_series_3,
      }]
    } as any);
  };
};


