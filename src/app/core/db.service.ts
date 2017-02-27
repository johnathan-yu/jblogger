import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { IUser } from 'app/model/user';

@Injectable()
export class DBService {
    private _apiUsersUrl = 'assets/users.json';

    constructor(private _http: Http) { }

    getUsers(): Observable<IUser[]> {
        return this._http.get(this._apiUsersUrl)
            .map((response: Response) => <IUser[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}