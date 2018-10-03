import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  public s:number=59;
  @Input() m:number=3;
  @Output() data = new EventEmitter();
  public minutos:number=this.m;
  public segundos:number=0;
  public interval:any;
  public zero:string ="0";
  public zerom:string="";
  constructor() { 
  }

  ngOnInit() {
    if(this.segundos<10 )
    {
      this.zero="0";
    }
    else
    {
      this.zero="";
    } 
    if(this.minutos<10 )
    {
      this.zerom="0";
    }
    else
    {
      this.zerom="";
    } 
    this.data.emit(`${this.zerom}${this.minutos}:${this.zero}${this.segundos}`);
  }
  start()
  {
    this.interval=setInterval(()=>{    
      this.segundos-=1;
      if(this.segundos<0)
      {
        this.segundos=this.s;
        this.minutos-=1; 
      }   
      if(this.segundos<10 )
      {
        this.zero="0";
      }
      else
      {
        this.zero="";
      } 
      if(this.minutos<10 )
      {
        this.zerom="0";
      }
      else
      {
        this.zerom="";
      } 
      if(this.minutos==0)
      {
        clearInterval(this.interval);
        this.minutos=this.m;
        this.segundos=0;
        this.zerom="";
        this.zero="0";
      }
      this.data.emit(`${this.zerom}${this.minutos}:${this.zero}${this.segundos}`);
    },1000);
  }
  reset()
  {
    this.segundos=0;
    this.zero="0";
    this.minutos=this.m;
  }
  stop()
  {
    clearInterval(this.interval);
  }

}
