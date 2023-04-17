import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: [
  ]
})
export class StudentsComponent {
  students = [
    {id: 1 , name: "maysara" , age : 26  , email: "maysara@gmail.com "},
    {id:  2, name: "maryam" , age : 25 , email: " omar@gmail.com"},
    {id:  3, name: "omar" , age : 24  , email: "maryam@gmaul.com"},
    {id:  4, name: "mohamed" , age :30  , email: "mohamed@gmail.com "},

  ]

}
