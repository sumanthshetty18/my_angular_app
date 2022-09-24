import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  count = 1;
  // @Input() count?:number;


  //Receive the counterValue from counterchild

  receivecount($event:any){
    this.count=$event;
  }

}
