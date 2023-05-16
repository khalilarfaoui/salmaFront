import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../services/material.service';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-add-material',
  templateUrl: './add-material.component.html',
  styleUrls: ['./add-material.component.css']
})
export class AddMaterialComponent implements OnInit {
  users: any = []; 
  constructor(private materialSer: MaterialService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    if (f.valid) {
      console.log(f.value)
      this.materialSer.addMaterial(f.value).subscribe(
        data => {
          location.href = "materials-lists";
        }
      );
    }
  }

}
