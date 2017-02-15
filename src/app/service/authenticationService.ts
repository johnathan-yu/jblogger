import { Injectable } from '@angular/core';
import { User } from 'app/model/user';
import { DBService } from 'app/service/dbService';

@Injectable()
export class AuthenticationService {
    private _users: User[]

    constructor(private _dbService: DBService) { }

    authenticateLogin(userName: string, password: string): boolean {
        if (this._users == null) {
            this._users = this._dbService.getUsers();
        }

        for (var i = 0, last = this._users.length; i < last; i++) {
            if (this._users[i].userName === userName && this._users[i].email === password) {
                return true;
            }
        }
        return false;
    }
}