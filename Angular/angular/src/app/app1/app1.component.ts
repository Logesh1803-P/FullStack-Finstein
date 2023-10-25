import { Component, EventEmitter, Input ,OnInit,Output} from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-app1',
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.scss']
})
export class App1Component implements OnInit{
  student:any[]=[];
  toDo:any[] = []


  //---------------------use services from services.service.ts--------------- 

  constructor(private service:ServiceService){}

  ngOnInit(): void {
    this.student = this.service.getstudent();

    this.service.getToDos().subscribe((data:any)=>{
      this.toDo = data
    })
    
  }

  // @Input() myvar = ""
  // @Input('myvar') newvar = "";
  @Input() test_p_c:string = "";
  @Output() myevent =  new  EventEmitter();
  @Output() c_p = new EventEmitter();
  @Output() jerry = new EventEmitter();


  // for c - p  to create output decorator
  






   
  //  Myfun(){

  //  }
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
  mytext:string = 'jeeva'

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

status:boolean = true
status1:boolean = false


// ---------------------------------------ngFor
  
 
array:string[] = ["loki",'jeeva','sathis','ayyayo']

  show :string= "";

 mycolor(clr:string){
  this.show = clr
  // console.log(this.newvar);
  this.myevent.emit("child ww")
  
 }

 // p-c property binding to show parent variable
 click(){
  // console.log(this.test_p_c);
  //  c-p do emit value
   
 }
 
//  student:{name:string,age:Number}[]=[
//   {name: "logesh",age:21},
//   {name: "david",age:20}
//  ]

 
c_p_t()
{
  this. c_p.emit("Calling from child");
}


tomBtn(){
  this.jerry.emit("Hi jerry from tom")
}


}



 
