import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day3';
addedStudents:{name:string, age:string}[] = [];

  getDataFromRegister(data:any){
    this.addedStudents.push(data);
    console.log(this.addedStudents);
  }
}
