import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { formatRating } from 'libs/store/ulti-formatters/src';

@Component({
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  title = 'Board Game Hoard';
  games = this.http.get<any[]>('/api/games');
  formatRating = formatRating;
}
