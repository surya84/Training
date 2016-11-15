import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/rx";
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    users: any[];
    url: string = "https://jsonplaceholder.typicode.com/";
    constructor(private _http: Http) { }

    getUsers(): Observable<any> {
        let usersUrl = `${this.url}users`;
        return this._http.get(usersUrl).map((res) => {
            return res.json();
        });
    }
}