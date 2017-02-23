import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import { Principal } from 'app/model/principal';

@Injectable()
export class UserAuthenticatedRouteGuard implements CanActivate {
    constructor(
        private _localStorageService: LocalStorageService,
        private _router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        // Check authentication
        let principal = this._localStorageService.get<Principal>('Principal');

        if (principal === null) {
            alert("You are not logged in.  Please log in.");
            this._router.navigate(['login'], { relativeTo: this._router.routerState.root });
            return false;
        } else if (!principal.isAuthenticated) {
            alert("You are not logged in.  Please log in.");
            this._router.navigate(['login'], { relativeTo: this._router.routerState.root });
            return false;
        }

        return true;
    }
}
