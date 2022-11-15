import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {
  @Output() fireNumber = new EventEmitter<number>();
  intervalId:any;
  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(){
    this.intervalId = setInterval(()=>{
      this.fireNumber.emit(++this.counter);
    },1000);
  }

  onPauseGame(){
    clearInterval(this.intervalId);
  }
}
