import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html'
})
export class DataBindingComponent {
  
  public clickCount: number = 0;
  public urlImage: string = "https://angular.io/assets/images/logos/angular/angular.svg";
  public text: string;

  clickEvent() {
    this.clickCount++;
  }

  clearCountEvent() {
    this.clickCount = 0;
  }
}
