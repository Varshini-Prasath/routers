import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    this.user={
    id : this.route.snapshot.params['id'],
    name : this.route.snapshot.params['name']
    }

    // when we subscribe to parms it will listen to the action that has been triggered
    this.route.params.subscribe(
      (parms: Params)=>
      {
        this.user.id = parms['id'];
        this.user.name = parms['name'];
      })
  }

}
