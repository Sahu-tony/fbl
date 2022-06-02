import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc:HttpClient) { }

  createUser(userObj:any):Observable<any>{
    return  this.hc.post("/createuser",userObj)
  }
  getUser(username:any):Observable<any>{
    return this.hc.get(`/user/getuser/${username}`)
}
  
  
}
