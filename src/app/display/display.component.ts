import { Component, OnInit, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input() rounds:number;
  @Input() fighter_1:string="CHON";
  @Input() fighter_2:string="HONG";
  redScore:number=0;
  blueScore:number=0;
  constructor() { }
  ngOnInit() 
  {
    
  }

}
