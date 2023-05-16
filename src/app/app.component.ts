import { Component } from '@angular/core';
import { AuthServiceService } from './services/auth-service.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  loggedIn$ : boolean;
  connectedUserInformations: any;
  constructor(private authservices: AuthServiceService) {
    this.loggedIn$ = false;
  }
  ngOnInit() {
    this.authservices.MeLoggedIn().subscribe(
      data => {
        if(data.uuid){
          this.loggedIn$ = true;
          this.connectedUserInformations = data;
        }
      }
    )
  }
  Signout(){
    sessionStorage.removeItem('userId');
    // location.href = '/';
  }
}
