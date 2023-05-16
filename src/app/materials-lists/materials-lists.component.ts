import { Component, OnInit } from '@angular/core';
import { RessourceMateriel } from '../models/material';
import { MaterialService } from '../services/material.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


class Material {
  name : any
  type : any
  quantite : any
  modele : any
}

@Component({
  selector: 'app-materials-lists',
  templateUrl: './materials-lists.component.html',
  styleUrls: ['./materials-lists.component.css']
})
export class MaterialsListsComponent implements OnInit {
  showMatadd : boolean = false
  ressourceMateriels: any;
  showMatEdit : boolean = false
  mat = new Material()

  constructor(private materialService: MaterialService, private router: Router) { }

  ngOnInit(): void {
    this.displayMaterials();
  }
  displayMaterials (){
    this.materialService.getAllMaterials().subscribe(
      data => {
        this.ressourceMateriels = data;
      }
    );
  }
  updateRessourceMateriel(uuid: string) {
    // code to update the RessourceMateriel object
    this.router.navigate(['update-material', uuid]);
  }

  addMat(){
    
    this.materialService.addMaterial(this.mat).subscribe(
      (data:any) => {
        this.showMatadd = false
        Swal.fire({
          title: 'Ajouter',
          text: 'Vous avez ajouter un ressource matériel avec sucée',
          icon: 'success',

        })
        this.displayMaterials();

      }
    );
  }
  reset(){
    this.mat = new Material()
  }
  showDialog(data : any){
    this.showMatEdit = true
    this.mat = data
  }

  update(){
    this.materialService.updateMaterial(this.mat).subscribe(res=>{
      this.showMatEdit = false
      Swal.fire({
        title: 'Modifer',
        text: 'Vous avez modifer un ressource matériel avec sucée',
        icon: 'success',

      })
      this.displayMaterials();
    })
  }

  openAddDialog(){
    this.mat = new Material()
    this.showMatadd = true
  }



  updateMat(){

  }

  deleteSwal(data : any){
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir supprimer ?',
      text: 'Vous ne pourrez pas récupérer ce document !!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimez-le !',
      cancelButtonText: 'Non, gardez-le"'
    }).then((response: any) => {
      if (response.value) {
        this.materialService.delete(data).subscribe(res=>{
          Swal.fire(
            'Supprimé !',
            'Votre fichier a été supprimé.',
            'success'
          )
          this.displayMaterials();
        },err=>{
          Swal.fire(
            'Erreur ! ',
            'Erreur de serveur.',
            'error'
          )
        })
      } else if (response.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annulé',
          'Votre fichier est en sécurité.',
          'error'
        )
      }
    })
  }
  

}
