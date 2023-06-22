import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles : [`
  .makeItWhite{
    color:white;
  }
  `]
})
export class AppComponent {
  title = 'assignment_3';

  buttonClicked : boolean = false
  clicks: number[] = [];
  counter = 0

  onClick(){
    this.buttonClicked === true ? this.buttonClicked = false : this.buttonClicked = true
    this.counter++
    this.clicks.push(this.counter)
  }
  
}
