import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>

    <button (click)="changeCounter(1, optionIncrease)" >+1</button>
    <button (click)="changeCounter(10, optionReset)" >Reset</button>
    <button (click)="changeCounter(1, optionDecrease)" >-1</button>
  `
})

export class CounterComponent {

  public counter : number = 10;

  public optionIncrease : OptionsCounter = OptionsCounter.increase;
  public optionDecrease : OptionsCounter = OptionsCounter.decrease;
  public optionReset : OptionsCounter = OptionsCounter.reset;

  constructor() { }

  changeCounter( value : number, option : OptionsCounter ) : void {

    switch ( option ) {

      case OptionsCounter.increase :
        this.counter += value;
        break;

      case OptionsCounter.decrease :
        this.counter -= value;
        break;

      case OptionsCounter.reset :
        this.counter = value;
        break;

      default:
        this.counter = value;
        break;

    }

  }

}

enum OptionsCounter {
  increase,
  decrease,
  reset
}
