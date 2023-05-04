import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute , Params, Router } from '@angular/router'
import { CanComponentDeactivate } from './can-deactivae.service';
import { Observable } from "rxjs-compat"


@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit , CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  checkSaveStatus = false; //can deactivate first step

  constructor(private serversService: ServersService,
    private route: ActivatedRoute,
    private router : Router) { }

  ngOnInit() {
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    this.route.queryParams.subscribe((queryParms : Params) => { this.allowEdit = queryParms['allowEdit'] === '1' ? true:false}
      )
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.checkSaveStatus = true;
    this.router.navigate(['../'] , {relativeTo: this.route});
  }

  //candeactivate final step
  canDeactivate () : Observable<boolean> | Promise<boolean> | boolean{
    if (!this.allowEdit){
        return true;
    }
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.checkSaveStatus){
        return confirm( ' Do you want to discard change?');
    }else{
      return true;
    }
  }
}
