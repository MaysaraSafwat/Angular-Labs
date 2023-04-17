import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registeration-form',
  templateUrl: './registeration-form.component.html',
  styles: [
  ]
})
export class RegisterationFormComponent {

  validationForm = new FormGroup({
    name:new FormControl(null,Validators.minLength(3)),
    age:new FormControl(null,[Validators.min(20),Validators.max(40)]),
    email:new FormControl(null,Validators.email )
  })

 Add(){

  let isNameValid = this.NameValidation;
  let isAgeValid = this.AgeValidation;
  let isEmailValid  = this.EmailValidation;
  if (isAgeValid && isEmailValid && isNameValid){
     let n = this.validationForm.controls["name"].value;
     let a = this.validationForm.controls["age"].value;
     let e = this.validationForm.controls["email"].value;
    let newStudent = {
      name : n,
      age : a,
      email : e
    }

    alert("Student Added Successfully!")
   }

 }

  get AgeValidation(){
    return this.validationForm.controls["age"].valid;
  }
  get NameValidation(){
    return this.validationForm.controls["name"].valid;
  }
  get EmailValidation(){
    return this.validationForm.controls["email"].valid;
  }
 


}
