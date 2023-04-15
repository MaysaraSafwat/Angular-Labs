import { Component } from '@angular/core';

@Component({
  selector:"app-second",
  templateUrl:"./second.component.html",
  styleUrls:["./second.component.css"]
})
export class SecondComponent {
  interval: any;
  index = 0;

  nextFlag = false;
  prevFlag = true;

  slideFlag= false;
  stopFlag = true;
  img = `assets/imgs/${this.index}.jpg`;

  //to move imgs forward
  moveNext() {
    if (this.index < 4 - 1) {
      this.index++;
      this.img = `assets/imgs/${this.index}.jpg`;
      if (this.index == 4 - 1) {
        this.nextFlag = true;
      }
    }
    if (this.index > 0) {
      this.prevFlag = false;
    }
  }
  
  //to move imgs backwards
  movePrev() {
    if (this.index == 4 - 1) {
      this.nextFlag = false;
    }
    if (this.index > 0) {
      this.index--;
      this.img = `assets/imgs/${this.index}.jpg`;
      if (this.index == 0) {
        this.prevFlag= true;
      }
    }
  }


  // to auto slide
  slide() {
    this.interval = setInterval(() => {
      this.index = (this.index +1 )  % 4;
      this.img = `assets/imgs/${this.index}.jpg`;
      this.prevFlag=this.index>1?false:true;
      this.nextFlag =this.index==4 - 1?true:false;
    }, 3000);
    this.stopFlag = false;
    this.slideFlag= true;
  }

  //to stop auto slide
  stopSlide() {
    clearInterval(this.interval);
    this.stopFlag = true;
    this.slideFlag= false;
  }
}