import { Component } from '@angular/core';

@Component({
  selector: 'app-app1',
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.scss']
})
export class App1Component {

  // show:boolean = true;

  

  // myvalue:string =''

  // emps:string[]=["loki","jeeva",'david']

  // mytext:string=''
  
  // name:string = "logesh";
  // employee:any = {
  //    firstName :"David",
  //    lastname:"web master",
  //    age : 23,
  //    role : "Dev"
  // }
 
  

  // // newname:string = 'Loki'
  // myfun(){
  //   console.log(this.employee.firstName,this.employee.lastname,this.employee.age,this.employee.age)
  // }
  // mychange(){
  // }
     // setcolor:string = ""
  // mylog(color:string){
  //   // this.setcolor = color
  //   console.log(color)
  // }

  // ---------------------------------------property binding---------------------------------
  mytext:string = 'jeeva '

  // --------------------------------event binding--------------------------------
  screen:string = ''
  myfun(){
    console.log(this.mytext)
    this.screen =this.mytext
  }

  employee:any={
    name:"",
    age:Number      //  i can't solve this error

  }

// ------------------------2 way binding----------------------------------------------------------

 
 
 myfun1(){
  console.log(this.employee)
  console.log("Name:",this.employee.name)
  console.log("Age:",this.employee.age)
 }
//  ----------------------------------2 binding use id
 setcolor : string = "red";
 silly(color:string){
    console.log(color);
    this.setcolor=color;
    
 }

// ---------------------------------- ngIf

gaji:boolean = true
gaji1:boolean = false

}


 
