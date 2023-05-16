import { Component, OnInit } from '@angular/core';
import { RhService } from '../services/rh.service';
import { ActivatedRoute } from '@angular/router';
import { RessourceHumaineAttributes } from '../models/rh';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-rh',
  templateUrl: './update-rh.component.html',
  styleUrls: ['./update-rh.component.css']
})
export class UpdateRhComponent implements OnInit {
  rhToUpdate: any;
  constructor(private rhs: RhService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const rhId = this.route.snapshot.params['id']; // get the user id from the route parameters
    this.rhs.getRhById(rhId).subscribe(rhh => { // call the service method to get the user by id
      this.rhToUpdate = rhh;
      console.log(this.rhToUpdate);
    });
  }

  onSubmit(form: NgForm){
    if (form.valid) {
      console.log(form.value)
      this.rhs.updateRH(form.value).subscribe(
        data => {
          location.href = "rh-lists";
        }
      );
    }
  }
}
