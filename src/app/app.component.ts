import { Component } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data: any[] = [
    {"key": "Saluation", "value": "Jr"},
  {"key": "First Name", "value": "Goerge"},
  {"key": "Middle Name", "value": "J"},
  {"key": "Last Name", "value": "Smooth"},
  {"key": "Suffix", "value": "third"},
  {"key": "Date Of Birth", "value": "27/10/1988"},
  {"key": "Birth State", "value": "GA"},
  {"key": "Birth Country", "value": "US"},
  {"key": "SSN", "value": "12345678"},
  {"key": "Sex", "value": "M"},
  {"key": "Citizenship", "value": "US"},
  {"key": "Occupation", "value": "Nurse Practioner"},
  {"key": "Income", "value": "10000"},
  {"key": "Height", "value": "6"},
  {"key": "Weight", "value": "170"},
  {"key": "DL Status", "value": "Active"},
  {"key": "DL State", "value": "PA"},
  {"key": "DL Number", "value": "D23468"},
  ];
  numColumns: number = 0;

  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe(Breakpoints.TabletPortrait)
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.numColumns = 2;
        }
      });
    this.breakpointObserver
      .observe(Breakpoints.HandsetPortrait)
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.numColumns = 1;
        }
      });
    this.breakpointObserver
      .observe(Breakpoints.WebPortrait)
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.numColumns = 3;
        }
      });
  }
}
