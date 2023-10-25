import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  object : any [] =[]

  studentX:any;
  
  constructor(private service:ServiceService){}
  ngOnInit(): void {

    this.service.getAll().subscribe((data)=>{
      this.studentX = data

    })

    this.object = this.service.getEmp()

    throw new Error('Method not implemented.');
  }

  
  // storedShow :any = localStorage.getItem('show');
  

  // retrieveData(){
  //   const data = this.service.getData(); // Retrieve data from the service
  //   console.log("kkkkkkkkkkkkkkdss",data);
  // }

  dataObjects: any[] = [];
  // Initialize an empty array for objects
  // dataObjects2: any[] = []; 
  newDataObject= {}
  
 
  createFun(Myname:any,Myage:any){
    this.newDataObject = {
      // Define properties based on form values
      name: Myname,
      age: Myage,
      // Add more properties if needed
    };
    // console.log(Myname,Myage);
    // this.details.push(Myname,Myage)
    // console.log(this.details);
    
    this.dataObjects.push(this.newDataObject)
    // console.log(this.dataObjects);
    this.service.sendData(this.newDataObject)

        
  }
  retrieveData(){
    // console.log(JSON.parse(this.storedShow));
  
  }
  
  

}


