import { Injectable } from '@angular/core';
import { User } from 'app/model/user';

@Injectable()
export class DBService {

    constructor() { }

    getUsers (): User[] {
        // TODO: Hard code sample data for now.  Need to write service to get real data.
        var users = new Array<User>();
        users.push(new User('John', 'A', 'Smith', 'jsmith', 'jsmith@jblogger.com'));
        users.push(new User('John', 'B', 'Doe', 'jdoe', 'jdoe@jblogger.com'));
        return users;
    }
}