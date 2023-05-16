import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './auth.interceptor';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AddRhComponent } from './add-rh/add-rh.component';
import { RhListsComponent } from './rh-lists/rh-lists.component';
import { UpdateRhComponent } from './update-rh/update-rh.component';
import { AddMaterialComponent } from './add-material/add-material.component';
import { MaterialsListsComponent } from './materials-lists/materials-lists.component';
import { UpdateMaterialComponent } from './update-material/update-material.component';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';
import { AddReclamationComponent } from './add-reclamation/add-reclamation.component';
import { ListeEmployerComponent } from './liste-employer/liste-employer.component';
import { AgendaComponent } from './agenda/agenda.component';
import { InterventionComponent } from './intervention/intervention.component';
import { SuiviMailComponent } from './suivi-mail/suivi-mail.component';
import { EquipeListeComponent } from './equipe-liste/equipe-liste.component';
import { UpdateEquipeComponent } from './update-equipe/update-equipe.component';
import { RechercheIntervComponent } from './recherche-interv/recherche-interv.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutoCompleteModule } from 'primeng/autocomplete'; 
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {MultiSelectModule} from 'primeng/multiselect';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserListComponent,
    AddUserComponent,
    UpdateUserComponent,
    AddRhComponent,
    RhListsComponent,
    UpdateRhComponent,
    AddMaterialComponent,
    MaterialsListsComponent,
    UpdateMaterialComponent,
    AddEquipeComponent,
    AddReclamationComponent,
    ListeEmployerComponent,
    InterventionComponent,
    SuiviMailComponent,
    EquipeListeComponent,
    UpdateEquipeComponent,
    RechercheIntervComponent,
    AgendaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FullCalendarModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
    ButtonModule,
    DialogModule,
    MultiSelectModule
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {


}
