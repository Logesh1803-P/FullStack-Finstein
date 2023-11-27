import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  apiUrl:string = "http://localhost:3001"

  constructor( private http: HttpClient) { }

  getAllStudent(){
    return this.http.get(this.apiUrl+"/getAllstudent")
  }

  createuser(Data:any){
    return this.http.post(this.apiUrl+"/createUser",Data);
  }

  getUserById(){
    return this.http.get(this.apiUrl+"/getUserById/:id")

  }
}
