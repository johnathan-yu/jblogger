import { IUser } from 'app/model/user';

export class IPrincipal {
    user: IUser = this._user;
    isAuthenticated: boolean = this._isAuthenticated;
    
    constructor(
        private _user: IUser,
        private _isAuthenticated: boolean
    ) { }
}