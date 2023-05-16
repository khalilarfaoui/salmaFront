import { Component, OnInit } from '@angular/core';
import { RhService } from '../services/rh.service';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-add-rh',
  templateUrl: './add-rh.component.html',
  styleUrls: ['./add-rh.component.css']
})
export class AddRhComponent implements OnInit {
  
  users: any = []
  constructor(private rhs: RhService) { }
  ngOnInit(): void {
   
  }
  onSubmit(f: NgForm) {
    if (f.valid) {
      console.log(f.value)
      this.rhs.addRh(f.value).subscribe(
        data => {
          location.href = "rh-lists";
        }
      );
    }
  }
}
