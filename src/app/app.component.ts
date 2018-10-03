import { Component } from '@angular/core';
interface Figth{
  rounds:number;
  minutos:number;
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TaeKwonDo-APP';
  config:Figth;
}
