import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Hola Mundo';
  public counter: number = 10;

  increaseBy(num: number):void {
    this.counter += num;
  }

  Reset():void {
    this.counter = 10;
  }
}
