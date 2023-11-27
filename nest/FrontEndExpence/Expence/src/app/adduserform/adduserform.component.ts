import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpenceService } from '../expence.service';


@Component({
  selector: 'app-adduserform',
  templateUrl: './adduserform.component.html',
  styleUrls: ['./adduserform.component.scss']
})
export class AdduserformComponent implements OnInit {
  userForm!:FormGroup;
  hobbiesForm!: FormGroup;
  show:boolean = false;
  username!:any;
  FormValue:any

  constructor(private fb: FormBuilder,private router: Router,private service: ExpenceService){}
  
  ngOnInit(){
    this.initializeForm();
    // this.formvalueChange();
  }

  
  categories = [
    { label: 'Food', value: 'Food' },
    { label: 'Travel', value: 'Travel' },
    { label: 'Other', value: 'Others' }
  ];

  

  initializeForm() {
    this.userForm = this.fb.group({
      name: [null, [Validators.required]],
      category: [null, [Validators.required]],
      Amount: [null, [Validators.required]],
      date: [null, [Validators.required]],
      description: [null, [Validators.required]],
    });

}

get form(){
  return this.userForm.controls;
}


myfun(){
  // this.username=this.userForm.value;

  const {name,Amount,date,description}=this.userForm.value;
  console.log(this.userForm.value)
  const {value} = this.userForm.value.category
  const category:string = value
  

  console.log(name,Amount,date,description,value)
const newExpense:{name:string,Amount:number,date:Date,description:string,category:string} ={name,Amount,date,description,category}
  console.log(newExpense);
  this.service.createUser(newExpense).subscribe((data)=>
  {
   
  });
  // this.show = true
 
  // this.router.navigate(['/AddUser/Home']); 
}




}
