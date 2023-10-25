
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Injectable({providedIn: 'root'})
export class ServiceNameService {
  // constructor(private httpClient: HttpClient) { }
  
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  urlApi:string =  "https://jsonplaceholder.typicode.com/todos/"

  apiUrl:string = "http://localhost:3001"

  
  // constructor() { }


  //-----data sent from form.component.ts----------------
  employees:any[] = [
    {name:"ll",age:1},
    {name:"ss",age:2},
    {name:"aa",age:3},
    {name:"qq",age:4},
    {name:"cc",age:3}
  ]

  show:any;
  sendData(obj:any){
    this.show = obj;
    // // localStorage.setItem('show', JSON.stringify(obj));
    // console.log(this.show);
    obj.push(this.employees)
    
  }

  setData(data: any) {
    this.show = data;
  }

  getData() {
    return this.show;
  }

  // employee:any[]=[]

  


  constructor(private http: HttpClient){}

 getAll(){
   return this.http.get(this.apiUrl+"/getAllUsers")
 }

  getToDos(){
    return this.http.get(this.urlApi+"1");
  }


  students:any[] = [
    {name: "logesh12",age:21},
    {name: "david",age:20}
  ]
  getstudent(){
   return this.students
  }


 
  createEmp(){

  }

  getEmp()
  {
    return this.employees;
  }
  
}
