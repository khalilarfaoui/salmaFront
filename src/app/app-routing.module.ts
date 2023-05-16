import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AddRhComponent } from './add-rh/add-rh.component';
import { UpdateRhComponent } from './update-rh/update-rh.component';
import { RhListsComponent } from './rh-lists/rh-lists.component';
import { AddMaterialComponent } from './add-material/add-material.component';
import { MaterialsListsComponent } from './materials-lists/materials-lists.component';
import { UpdateMaterialComponent } from './update-material/update-material.component';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';
import { AddReclamationComponent } from './add-reclamation/add-reclamation.component';
import { AgendaComponent } from './agenda/agenda.component';
import { EquipeListeComponent } from './equipe-liste/equipe-liste.component';
import { UpdateEquipeComponent } from './update-equipe/update-equipe.component';
import { InterventionComponent } from './intervention/intervention.component';
import { SuiviMailComponent } from './suivi-mail/suivi-mail.component';
import { RechercheIntervComponent } from './recherche-interv/recherche-interv.component';

const routes: Routes = [
  { path: 'add-user', component: AddUserComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'update-user/:id', component: UpdateUserComponent },
  { path: 'add-rh', component: AddRhComponent },
  { path: 'rh-lists', component: RhListsComponent },
  { path: 'update-rh/:id', component: UpdateRhComponent },
  { path: 'add-material', component: AddMaterialComponent},
  {path: 'materials-lists', component: MaterialsListsComponent},
  { path: 'update-material/:id', component: UpdateMaterialComponent },
  { path: 'add-equipe', component: AddEquipeComponent },
  { path: 'add-reclamation', component: AddReclamationComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'equipe-liste', component: EquipeListeComponent },
  { path: 'update-equipe', component: UpdateEquipeComponent},
  { path: 'add-equipe', component: AddEquipeComponent},
  { path: 'intervention', component: InterventionComponent},
  { path: 'suivi-mail', component: SuiviMailComponent},
  { path: 'recherche-interv', component: RechercheIntervComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
