import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';

import { Routes , RouterModule } from '@angular/router'
import { NgModule } from '@angular/core';
import { AuthGaud } from './auth-gaurd.service';
import { CanDeactivateGaurd } from './servers/edit-server/can-deactivae.service';
import { ServerResolve } from './servers/server/server-resolver.service';


const appRoute : Routes = [
  {path : '' , component : HomeComponent},
  { path : 'Servers' ,canActivateChild :[AuthGaud] , component : ServersComponent , children :
   [
    {path : ':id' , component : ServerComponent, resolve: {server: ServerResolve}},
    {path : ':id/edit' , component : EditServerComponent , canDeactivate: [CanDeactivateGaurd]} //call component
   ] },
  {path : 'Users' , component : UsersComponent , children :
  [{path : ':id/:name' , component : UserComponent}] // set value in th DOM
}
];

@NgModule({
  imports : [RouterModule.forRoot(appRoute)],
  exports : [RouterModule]
}
)

export class AppRouterModule{

}
