import { ChangeDetectorRef,Component, OnDestroy, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnDestroy, OnInit {  
  mobileQuery : MediaQueryList;
  timeLittle:string="mm:ss";
  f1:string="Dany";
  f2:string="Marce";
  private _mobileQueryListener: () => void;
  options:string[]=["Configuracion","Marcador","Referi"];
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnDestroy()
  {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  ngOnInit()
  {
    
  }
  timerUpdate(event){
    this.timeLittle=event;
  }
}
