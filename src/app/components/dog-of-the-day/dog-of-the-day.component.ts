import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

interface IResponse {
  status: string;
  message: string;
}

@Component({
  selector: 'bz-dog-of-the-day',
  template: `
    <link href="https://fonts.googleapis.com/css?family=Nanum+Pen+Script" rel="stylesheet">
    <div class="component_container">
      <h1>{{message}}</h1>
      <img src="{{imagen}}" *ngIf="imagen"/>
    </div>
  `,
  styles: [`
    .component_container {
      font-family: 'Nanum Pen Script', cursive;
      width: 580px;
      height: auto;
      border: 1px solid #CECECE;
      padding: 20px;
      text-align: center;
      background: #F2F2F2;
    }
    .component_container img {
      width: 100%;
      height: auto;
    }
  `],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class DogOfTheDayComponent implements OnInit {

  public imagen: string;
  public message = 'Dog of The Day';

  constructor(
    public http: HttpClient,
  ) { }

  ngOnInit() {
    this.http.get(environment.api_url).subscribe((dotd: IResponse) => {
      this.imagen = dotd.message;
    });
  }
}
