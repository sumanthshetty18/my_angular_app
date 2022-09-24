import { Component, OnInit, Input,  Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counterchild',
  templateUrl: './counterchild.component.html',
  styleUrls: ['./counterchild.component.css']
})
export class CounterchildComponent implements OnInit {


  @Input() counterValue: number = 1;
  countLessThanOne = true;
  @Output() countEmitter = new EventEmitter();
  @Output() quantityEmitter = new EventEmitter();
  PostData() {
    this.countEmitter.emit(this.counterValue);
    this.quantityEmitter.emit(this.counterValue);
  }

  //increment and decrement 

  //Quantity -> 10
  decrement(){
    if(this.counterValue==1)
    {
      this.countLessThanOne=false;
    }
    else{
      this.countLessThanOne=true;
      this.counterValue--;
    }
    this.PostData();
  }

  increment(){
    this.counterValue++;
    this.countLessThanOne=true;
    this.PostData();
  }



  constructor() { }

  ngOnInit(): void {
  }

}
