import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styles: [
  ]
})
export class StudentsDetailsComponent {
  studentId=0;
  constructor(myRoute:ActivatedRoute){
    this.studentId = myRoute.snapshot.params["id"];
  }
}
