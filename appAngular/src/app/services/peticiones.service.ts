import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PeticionesService{
    public url:string;

    constructor(public _http: HttpClient){
            this.url = 'https://reqres.in/';
        }

    getUsers(userID):Observable<any> {
        return this._http.get(this.url+'api/users/'+userID);
    }    

    addUser(user):Observable<any>{
        let params =JSON.stringify(user);
        let header = new HttpHeaders().set('Content-type', 'application/json')

        return this._http.post(this.url+'api/users', params,{headers:header})
    }
};
