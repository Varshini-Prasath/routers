import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGaud } from '../auth-gaurd.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router ,
              private authService : AuthService) { }

  ngOnInit() {
  }

  //Navigate to next Page
  onClickMoveToServer(id){
    this.router.navigate(['/Servers', id , 'edit'], {queryParams : {allowEdit : '1'} , fragment : 'loading'});

  }

  onLoggin(){
    this.authService.login();

  }

  onLogout(){
    this.authService.logout();

  }
}
