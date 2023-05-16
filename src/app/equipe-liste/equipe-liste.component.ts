import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../services/equipe.service';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UsersService } from '../services/users.service';
import Swal from 'sweetalert2';

class Equipe {
  zone: any
  specialite: any
}
@Component({
  selector: 'app-equipe-liste',
  templateUrl: './equipe-liste.component.html',
  styleUrls: ['./equipe-liste.component.css']
})
export class EquipeListeComponent implements OnInit {
  equipe: any = [];
  userId = sessionStorage.getItem('userId');
  user: any
  eq = new Equipe()

  constructor(private equipeServices: EquipeService, private router: Router, private userService: UsersService) {
    this.userService.getUserById(this.userId).subscribe(res => {
      this.user = res
      console.log(this.user)
    })
  }
  show: boolean = false
  showEdit: boolean = false
  displayEquipe() {
    this.equipeServices.getAllEquipes().subscribe(
      data => {
        this.equipe = data;
        console.log(data)
      }
    );
  }

  ngOnInit(): void {
    this.displayEquipe();
  }
  openAddDialog() {
    this.show = true
  }

  add() {
    console.log(this.eq)
    this.equipeServices.addEquipe(this.eq, this.userId).subscribe(
      data => {
        console.log(data)
        this.show = false
        Swal.fire({
          title: 'Ajouter',
          text: 'Vous avez ajouter un équipe avec sucée',
          icon: 'success',

        })
        this.displayEquipe();
      }
    );
  }

  update(){
    this.equipeServices.updateEquipe(this.eq).subscribe(
      (data:any) => {
        this.showEdit = false
        Swal.fire({
          title: 'Modification',
          text: 'Vous avez modifdier les données avec sucées',
          icon: 'success',
        })
        this.displayEquipe();      }
    );
  }

  showUpdate(e:any){
    this.showEdit = true
    this.eq = e
  }
  reset(){
    this.eq = new Equipe()
  }

  delete(ID_Equipe: any) {
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir supprimer ?',
      text: 'Vous ne pourrez pas récupérer ce document !!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimez-le !',
      cancelButtonText: 'Non, gardez-le"'
    }).then((response: any) => {

      this.equipeServices.deleteEquipe(ID_Equipe.ID_Equipe).subscribe(
        data => {
          Swal.fire(
            'Supprimé !',
            'Votre fichier a été supprimé.',
            'success'
          )
          this.displayEquipe();
        }
      )
    })
  }
  updateEquipe(ID_Equipe: string) {
    this.router.navigate(['update-equipe', ID_Equipe]);
  }

}
