export class CounterService {
  activeToInactiveCounter = 0;
  inActiveToActiveCounter = 0;

  constructor() { }

  incrActiveToInactiveCounter(){
    this.activeToInactiveCounter++;
    console.log('ActiveToInactiveCounter', this.activeToInactiveCounter);
  }

  incrInactiveToActiveCounter(){
    this.inActiveToActiveCounter++;
    console.log('InactiveToActiveCounter', this.inActiveToActiveCounter);
  }
}
