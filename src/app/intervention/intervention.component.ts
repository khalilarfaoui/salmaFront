import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../services/reclamation.service';
import { InterventionService } from '../services/intervention.service';
import Swal from 'sweetalert2';
import { MaterialService } from '../services/material.service';

class Inter {
  datedebut: any
  datefin_prevu: any
  nom: any
  datefin_reelle: any
  recID: any
  userId: any
  id_Rec: any
}

@Component({
  selector: 'app-intervention',
  templateUrl: './intervention.component.html',
  styleUrls: ['./intervention.component.css']
})
export class InterventionComponent implements OnInit {
  inter = new Inter()
  constructor(private recService: ReclamationService, private interService: InterventionService, private materialService: MaterialService) { }
  reclamtionAll: any
  rec: any
  interAll: any
  showDialog: boolean = false
  affectCon: boolean = true
  listeCon: boolean = false
  showAddMAt: boolean = false
  intradate: any
  selectMat : any
  allMat: any
  idInter:any
  ngOnInit(): void {
    this.getReclamtion()
    this.getIntervention()
    this.getAllMAt()
  }
  showListe() {
    this.affectCon = false
    this.listeCon = true

  }

  showDialogmat(data : any){
    this.showAddMAt = true
    console.log(data)
    this.idInter = data.id
  }

  resetMat(){
    this.intradate = null
    this.selectMat = null
  }

  addMat(){
    console.log(this.selectMat)
    this.selectMat.map((i:any)=>{
      var obj = {
        id : i.id ,
        id_inter : this.idInter,
        date : this.intradate
      }

      console.log(obj)
      this.interService.addMat(obj).subscribe(res=>{
        console.log(res)
        this.showAddMAt = false
      })
    })
  }

  getAllMAt() {

    this.materialService.getAllMaterials().subscribe(
      (res: any) => {
        this.allMat = res
        console.log(this.allMat)
      }
    );
  }

  getReclamtion() {
    this.recService.getAllRecalamation().subscribe(res => {
      this.reclamtionAll = res
      console.log(res)
    })
  }
  show(r: any) {
    this.rec = r
    console.log(r)
    this.showDialog = true
  }

  showLAffect() {
    this.affectCon = true
    this.listeCon = false
  }

  getIntervention() {
    this.interService.getIntervention().subscribe(res => {
      this.interAll = res
      console.log(this.interAll)
    })
  }


  add() {
    this.inter.recID = this.rec.id_Rec
    this.inter.id_Rec = this.rec.id_Rec
    console.log(this.inter)
    this.interService.postIntervention(this.inter).subscribe(res => {
      console.log(res)
      Swal.fire({
        title: 'Ajouter',
        text: 'Vous avez ajouter un intervention avec sucées',
        icon: 'success',

      })
      this.getReclamtion()
      this.showDialog = false
    })
  }
  reset() { }

}
