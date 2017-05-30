import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
// import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { IUser } from 'app/model/user';

@Injectable()
export class DBService {
    private _apiUsersUrl = 'assets/users.json';
    private _apiCreateUserUrl = 'http://localhost:3000/user'

    constructor(private _http: Http) { }

    getUsers(): Observable<IUser[]> {
        return this._http.get(this._apiUsersUrl)
            .map(this.extractData)
            // .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    createUser(user: IUser): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this._apiCreateUserUrl, JSON.stringify(user), options)
            .map(this.extractData)
            // .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        console.log('extractData: ' + JSON.stringify(body.data || {}));
        return body.data || {};
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}