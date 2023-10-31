import {Component} from "@angular/core"

@Component({
  selector : 'app-counter',
  template : `
  <h3>Counter : {{counter}}</h3>
<button (click)="increaseBy(1)">+1</button>
<button (click)="reset()">Reset</button>
<button (click)="increaseBy(-1)">-1</button>`

})
export class counterComponent{
  public defaultCounterValue : number = 10;
  public counter : number = this.defaultCounterValue;

  increaseBy (value : number) : void {
    this.counter += value;
  }

  reset () : void {
    this.counter = this.defaultCounterValue;
  }
}
