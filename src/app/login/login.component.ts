import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: any
  password: any
  constructor(private authServices: AuthServiceService) { }

  ngOnInit(): void {
  }
  onLogin(e:any,f:NgForm){
    e.preventDefault();
    console.log(e)
    console.log(f.value)
    if(f.valid){
      this.authServices.login(f.value).subscribe(
        data => {
          console.log(data);
          sessionStorage.setItem("userId", data.uuid);
          location.href = "user-list";
        }, error => {
          alert("probleme login");
        }
      )
    }
  }
}
