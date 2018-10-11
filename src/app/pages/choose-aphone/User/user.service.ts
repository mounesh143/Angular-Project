import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
//import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import{User} from './user/user.module';
import "rxjs";
import { Observable } from "rxjs";
import { map } from "rxjs-compat/operator/map";

@Injectable()
export class UserService {

 private url = "http://localhost:3035/api/user/";

  constructor(private http: Http) {}

  getUser(): Observable<User> {
    return this.http.get(this.url)
    .map( res => new User().deserialize(User));
    }

  // Observable<TwitterResponse> {
  //   return this.http.get<TwitterResponse>('http://localhost:8000')
  //     .pipe(
  //       map(res => new TwitterResponse().deserialize(res))
  //     );

  // getEvents()
  // {
  //   return this.http.get<any>(this.url)
  // }
}