import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
 
  registerForm = this.fb.group({
    email:['',Validators.required],
    userName:['',Validators.required],
    pswrd:['',Validators.required],
    cpswrd:['',Validators.required]
  })

  constructor(private fb: FormBuilder){}

  saveDetails(data:any){
      console.log(data)
  }

}
