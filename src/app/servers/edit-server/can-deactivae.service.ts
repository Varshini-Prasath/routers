import { Observable } from "rxjs-compat"
import { CanDeactivate , ActivatedRouteSnapshot , RouterStateSnapshot } from '@angular/router'



export interface CanComponentDeactivate{
  canDeactivate : () => Observable<boolean> | Promise<boolean> | boolean
}

export class CanDeactivateGaurd implements CanDeactivate<CanComponentDeactivate>{

  //canDeactivate method is called when user tries to leave apage

  canDeactivate( component : CanComponentDeactivate ,
                  currentRoute : ActivatedRouteSnapshot ,
                  currentState : RouterStateSnapshot,
                  nextState? : RouterStateSnapshot):
                   Observable<boolean> | Promise<boolean> | boolean {

                    return component.canDeactivate();

                   }
}
