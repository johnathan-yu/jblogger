import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { Principal} from 'app/model/principal';

@Component({
  selector: 'jb-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  title: string = '';

  constructor(private _localStorageService: LocalStorageService) { }

  ngOnInit() {
  }

  isAuthenticatedUser(): boolean {
    let principal = this._localStorageService.get<Principal>('Principal');

    if (principal === null) {
      return false;
    }

    return principal.isAuthenticated;
  }

  logout(): void {
    this._localStorageService.remove('Principal');
  }
}
