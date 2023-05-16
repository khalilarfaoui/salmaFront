import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  constructor(private userServices: UsersService) {
  }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    if (f.valid) {
      console.log(f.value)
      this.userServices.addUser(f.value).subscribe(
        data => {
          location.href = "user-list";
        }
      );
    }
  }
}
