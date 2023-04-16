import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 studentName = '';
 studentAge:any;
 @Output() addStudentEvent = new EventEmitter();

 add(){
  if(this.studentName.length <= 3) {
     alert("Name is too short")
  }
  else if ( +this.studentAge < 20 || +this.studentAge > 40){
    alert("your Age must be between 20-40")
  }
  else {
    let newStudent = {'name' : this.studentName, 'age': this.studentAge};
    this.addStudentEvent.emit(newStudent);
   
    this.studentName = '';
    this.studentAge = '';
 
  }

  }
}
