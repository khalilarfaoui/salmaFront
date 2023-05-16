import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../services/material.service';
import { ActivatedRoute } from '@angular/router';
import { RessourceMateriel } from '../models/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-material',
  templateUrl: './update-material.component.html',
  styleUrls: ['./update-material.component.css']
})
export class UpdateMaterialComponent implements OnInit {
  materialToUpdate: any;
  constructor(private materialservice : MaterialService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const materialId = this.route.snapshot.params['id']; // get the user id from the route parameters
    this.materialservice.getMaterialById(materialId).subscribe(mat => { // call the service method to get the user by id
      this.materialToUpdate = mat;
    });
  }
  onSubmit(form : NgForm): void {
    if (form.valid) {
      this.materialservice.updateMaterial(this.materialToUpdate).subscribe(
        data => {
          location.href = "materials-lists";
        }
      );
    }
  }

}
