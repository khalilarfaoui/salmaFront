import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../services/reclamation.service';

class Reclamation {
  district: any
  demandeur: any
  adresse: any
  telephone: any
  demande: any
  dateRecalamtion: any
  userId: any
}

@Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.css']
})
export class AddReclamationComponent implements OnInit {

  constructor( private recService : ReclamationService) { }
  rec = new Reclamation()
  reclamtionAll:any

  ngOnInit(): void {
    this.getReclamtion()
  }

  getReclamtion(){
    this.recService.getAllRecalamation().subscribe(res=>{
      this.reclamtionAll = res
      console.log(res)
    })
  }

  add(){
    console.log(this.rec)
    this.recService.addRecalaùation(this.rec).subscribe(res=>{
      console.log(res)
    })
  }

}
