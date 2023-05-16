import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any = [];
  userToUpdate:any
  constructor(private userServices : UsersService, private router: Router) { 
    this.displayUsers();
  }

  displayUsers (){
    this.userServices.getAllUsers().subscribe(
      data => {
        this.users = data;
      }
    );
  }

  ngOnInit(): void {
  }
  deleteUser(userId: string){
    this.userServices.deleteUser(userId).subscribe(
      data => {
        this.displayUsers();
      }
      )
  }
  updateUser(userId: string){
    this.router.navigate(['update-user', userId]);
  }
}
