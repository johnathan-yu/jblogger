import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IUser } from 'app/model/user';
import { IPrincipal } from 'app/model/principal';
import { DBService } from 'app/core/db.service';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class AuthenticationService {
    private _users: IUser[];
    errorMessage: string;

    constructor(
        private _dbService: DBService,
        private _localStorageService: LocalStorageService
    ) { }

    authenticateLogin(userName: string, password: string): Observable<boolean> {
        let observable = Observable.create((observer) => {
            this._dbService.getUsers()
                .subscribe(
                users => {
                    this._users = users;
                    let authenticated = false;

                    for (var i = 0, last = this._users.length; i < last; i++) {
                        let usernameToMatch = this._users[i].userName;
                        let passwordToMatch = this._users[i].email;
                        let user = this._users[i];

                        if (usernameToMatch === userName && passwordToMatch === password) {
                            this._localStorageService.set("Principal", new IPrincipal(user, true));
                            authenticated = true;
                        }
                    }

                    observer.next(authenticated);
                },
                error => {
                    this.errorMessage = <any>error
                    observer.error(this.errorMessage);
                });
        });

        return observable;
    }
}