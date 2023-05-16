import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../services/equipe.service';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';


@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css']
})
export class AddEquipeComponent implements OnInit {
  users: any = []; 
  constructor(private equipeSer: EquipeService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    if (f.valid) {
      console.log(f.value)
      // this.equipeSer.addEquipe(f.value).subscribe(
      //   data => {
      //     location.href = "equipe-liste";
      //   }
      // );
    }
  }

}
