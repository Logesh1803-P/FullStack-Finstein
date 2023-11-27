import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';

@Component({
  selector: 'app-cruddb',
  templateUrl: './cruddb.component.html',
  styleUrls: ['./cruddb.component.scss']
})
export class CRUDDBComponent implements OnInit{
     s:any={}

     student:any;

     constructor(private service:DbService){}

     ngOnInit(): void {
      this.getall();
     }

     getall()
     {
      this.service.getAllStudent().subscribe((data => {
        this.student = data
        }))
     }

     create(){
     console.log(this.s);
     this.service.createuser(this.s).subscribe((data)=>{
     this.getall();
     })
     }

     getUserbyID(){
      this.service.getUserById().subscribe((data)=>{
         console.log(data)
        })

     }
     Update(){
      console.log(this.s);
      
     }


}
