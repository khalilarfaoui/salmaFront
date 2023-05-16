import { Component, OnInit } from '@angular/core';
import { RhService } from '../services/rh.service';
import { RessourceHumaineAttributes } from '../models/rh';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

class Rh {
  nom: any
  prenom: any
  Fonction: any
  Ville: any
  CIN: any
  identifiant: any
}


@Component({
  selector: 'app-rh-lists',
  templateUrl: './rh-lists.component.html',
  styleUrls: ['./rh-lists.component.css']
})
export class RhListsComponent implements OnInit {
  ressourceHumaines: any = [];
  showRh: boolean = false
  showRhadd: boolean = false

  rh = new Rh()
  constructor(private ressourcesServices: RhService, private router: Router) { }

  displayRhs() {
    this.ressourcesServices.getAllRhs().subscribe(
      data => {
        this.ressourceHumaines = data;
        console.log(this.ressourceHumaines)
      }
    );
  }

  ngOnInit(): void {
    this.displayRhs();
  }

  deleteRh(identifiant: string) {
    // this.ressourcesServices.deleteRH(identifiant).subscribe(
    //   data => {
    //     this.displayRhs();
    //   }
    //   )
  }
  showDialog(data: any) {
    this.showRh = true
    this.ressourcesServices.getRhById(data.identifiant).subscribe(rhh => {
      this.rh = rhh
    });
  }

  reset() {
    this.rh = new Rh()
  }
  openAddDialog() {
    this.rh = new Rh()
    this.showRhadd = true
  }
  updateRh(identifiant: string) {
    this.router.navigate(['update-rh', identifiant]);
  }

  upDate() {
    this.ressourcesServices.updateRH(this.rh).subscribe(
      (data: any) => {
        console.log(data)
        this.showRh = false
        Swal.fire({
          title: 'Modification',
          text: 'Vous avez modifdier les données avec sucée',
          icon: 'success',
        })
        this.displayRhs()
      }
    );


  }

  addRH() {
    this.ressourcesServices.addRh(this.rh).subscribe(
      (data: any) => {
        this.showRhadd = false
        Swal.fire({
          title: 'Ajouter',
          text: 'Vous avez ajouter un ressource humaine avec sucée',
          icon: 'success',

        })
        this.displayRhs()

      }
    );
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
        this.ressourcesServices.delete(data.identifiant).subscribe(res=>{
          Swal.fire(
            'Supprimé !',
            'Votre fichier a été supprimé.',
            'success'
          )
            this.displayRhs()
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
