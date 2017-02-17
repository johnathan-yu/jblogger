import { User } from 'app/model/user';

export class Principal {
    user: User = this._user;
    isAuthenticated: boolean = this._isAuthenticated;
    
    constructor(
        private _user: User,
        private _isAuthenticated: boolean
    ) { }
}