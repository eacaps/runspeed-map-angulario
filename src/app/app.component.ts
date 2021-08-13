import { Component } from '@angular/core';
// @ts-ignore
import Utils from '../utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  range = Utils.getSpeedRange();
  scale = Utils.getColorScale();
}
