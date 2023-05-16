import { Component, OnInit } from '@angular/core';
import { Equipe } from '../models/equipe';
import { EquipeService } from '../services/equipe.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-equipe',
  templateUrl: './update-equipe.component.html',
  styleUrls: ['./update-equipe.component.css']
})
export class UpdateEquipeComponent implements OnInit {

  equipeToUpdate: any;
  constructor(private equipe: EquipeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const IdEq = this.route.snapshot.params['ID_Equipe']
    this.equipe.getEquipeById(IdEq).subscribe(eqq => { 
      this.equipeToUpdate = eqq;
      console.log(this.equipeToUpdate);
    });
  }

  onSubmit(form: NgForm){
    if (form.valid) {
      console.log(form.value)
      this.equipe.updateEquipe(form.value).subscribe(
        data => {
          location.href = "equipe-liste";
        }
      );
    }
  }
}
