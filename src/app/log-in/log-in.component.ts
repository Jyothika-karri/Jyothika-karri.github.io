import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {

  loginForm=this.fb.group({
   userName:['',Validators.required],
   pswrd:['',Validators.required]
  })

  constructor(private fb: FormBuilder){}

  loginData(data:any){
    console.log(data)
  }
}
