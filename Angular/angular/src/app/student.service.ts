import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  apiUrl:string = "http://localhost:3001"

  constructor(private http : HttpClient ) { }

  getAllstudent(){
    return this.http.get(this.apiUrl+"/getAllstudent")
  }
  

}
