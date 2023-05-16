import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  userToUpdate: any;
  constructor(private userservice: UsersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.params['id'] // get the user id from the route parameters
    this.userservice.getUserById(userId).subscribe(user => { // call the service method to get the user by id
      this.userToUpdate = user;
      console.log(this.userToUpdate);
    });
  }

  onSubmit(form: NgForm){
    if (form.valid) {
      console.log(form.value)
      this.userservice.updateUser(form.value).subscribe(
        data => {
          location.href = "user-list";
        }
      );
    }
  }
}
