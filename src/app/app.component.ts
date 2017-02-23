import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import { Principal } from 'app/model/principal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private _localStorageService: LocalStorageService,
    private _router: Router
  ) { }

  ngOnInit() {
    // this.ensureUserIsAuthenticated();
  }

  // ensureUserIsAuthenticated(): void {
  //   this._router.events.subscribe((event) => {
  //     if (event instanceof NavigationEnd) {
  //       let url = event.url;

  //       // Exclude login page from checking authentication
  //       if (url.toLowerCase() === this._router.routerState.root + '/login')
  //         return;

  //       // Check authentication
  //       let principal = this._localStorageService.get<Principal>('Principal');

  //       if (principal === null) {
  //         alert("You are not logged in.  Please log in.");
  //         this._router.navigate(['login'], { relativeTo: this._router.routerState.root });
  //       } else if (!principal.isAuthenticated) {
  //         alert("You are not logged in.  Please log in.");
  //         this._router.navigate(['login'], { relativeTo: this._router.routerState.root });
  //       }
  //     }
  //   });
  // }
}
