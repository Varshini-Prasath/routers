import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { Component } from '@angular/core';
import { AppRouterModule } from './app-routing.module';
import { AuthGaud } from './auth-gaurd.service';
import { AuthService } from './auth.service';
import { CanDeactivateGaurd } from './servers/edit-server/can-deactivae.service';
import { ServerResolve } from './servers/server/server-resolver.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule


  ],
  providers: [ServersService , AuthGaud , AuthService , CanDeactivateGaurd , ServerResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
