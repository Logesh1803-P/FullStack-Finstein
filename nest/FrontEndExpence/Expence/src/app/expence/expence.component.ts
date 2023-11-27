import { Component, OnInit, ViewChild } from '@angular/core';
import { ExpenceService } from '../expence.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Button } from 'primeng/button';
import { ConfirmationService, MessageService } from 'primeng/api';
import * as moment from 'moment';




@Component({
  selector: 'app-expence',
  templateUrl: './expence.component.html',
  styleUrls: ['./expence.component.scss']
})
export class ExpenceComponent implements OnInit {


  // deleteProduct(_t26: any) {
  // throw new Error('Method not implemented.');
  // }
  // editProduct(_t26: any) {
  // throw new Error('Method not implemented.');
  // }


  userForm!: FormGroup;
  hobbiesForm!: FormGroup;
  show: boolean = false;
  username!: any;
  FormValue: any

  sidebarVisible = false;
  Expences: any;
  details: any;

  GetbyId: any;

  ButtonShow: boolean = false;

  updateId: any;

  Dvisible = false;
  DialogUpdate= false;

  UpdateVar:any;

  DialogDelete = false;
  DeleteId :any;

  categories!:category[]



  // constructor(private service : ExpenceService){}
  constructor(private service: ExpenceService, private router: Router, private fb: FormBuilder, private messageService: MessageService, private confirmationService: ConfirmationService) { }


  ngOnInit(): void {
    this.getall();
    this.initializeForm();

    this.service.getCategory().subscribe((da:any) =>{
      this.categories = da['data']
      console.log(this.categories);
      
     
  
    })

    // this.update();
  }




  getall() {
    this.service.getExpenceList().subscribe((data) => {
      this.Expences = data;
      this.details = this.Expences.data;
      console.log(this.Expences);

    });
  }

  createUsers() {
    // this.router.navigate(['/AddUser']);
    this.sidebarVisible = true;
    this.ButtonShow = true;
    this.userForm.reset();
  }
  resetForm() {
    // Reset the form to its initial state


    // If you have form controls with default values, you might want to patch those values
    // this.userForm.patchValue({
    //   name: 'defaultName',
    //   category: 'defaultCategory',
    //   // Other form controls...
    // });
  }




  editUser(id: any) {
    // this.router.navigate(['/AddUser']);

    this.ButtonShow = false
    this.sidebarVisible = true
    console.log("edit", id)
    this.updateId = id

    this.service.editUser(id).subscribe((res: any) => {

      console.log("logre--------------------res.data", res.data);

      // this.GetbyId = res.data;

      // this.GetbyId = res.data;
      let data=res.data;
    //  res.data.date=res.data.date.slice(0,10);
      res.data.date = new Date(res.data.date);
      console.log("dateeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee---",res.data.date);

      // this.userForm.patchValue(this.GetbyId)
      this.userForm.patchValue(res.data);
      console.log(res.data)



      // console.log("log----------------------------get user by id", this.GetbyId);
      // console.log("log----------------------------get user by date", this.GetbyId.date);


      // const originalDateTime: string = this.GetbyId.date;

      // console.log(originalDateTime);


      // // Parse the original date-time string
      // const parsedDateTime: Date = new Date(originalDateTime);

      // // Extract the date part in 'yyyy-MM-dd' format
      // const convertedDate: string = parsedDateTime.toISOString().split('T')[0];

      // console.log(convertedDate);

      // const {name,Amount,date,description,category}=this.GetbyId;


      // const newExpense:{name:string,Amount:number, date:Date,description:string,category:string} ={name,Amount, convertedDate,description,category}

      // console.log(newExpense);

      // Input date string
     

      // console.log('ccccccccccccccc---------------forrrrrr',outputDateString);

      console.log('cccc---------------forrrrrr', this.GetbyId); 

    })

    // this.service.editUser(id).subscribe((res: any) => {
    //   // ...

    //   const originalDateTime: string = this.GetbyId.date;

    //   console.log(originalDateTime);

    //   // Parse the original date-time string
    //   const parsedDateTime: Date = new Date(originalDateTime);

    //   // Keep the date as a Date object
    //   const convertedDate: Date = parsedDateTime;

    //   console.log(convertedDate);

    //   const { name, Amount, description, category } = this.GetbyId;

    //   const newExpense: {
    //     name: string;
    //     Amount: number;
    //     date: Date; // Keep it as Date
    //     description: string;
    //     category: string;
    //   } = { name, Amount, date: convertedDate, description, category };

    //   console.log(newExpense);

    //   this.userForm.patchValue(res.data);

    // });

  }

  Update(data: any) {

    console.log("-----------update---------------------date", data.date);
    let id: number = this.updateId
    console.log("-----------update id", id);


    // const {name,Amount,date,description}=this.userForm.value;
    // console.log(this.userForm.value)
    // const {value} = this.userForm.value.category
    // const category:string = this.userForm.value




    // console.log(name,Amount,date,description,value)
    // const newExpense:{name:string,Amount:number,date:Date,description:string,category:string} ={name,Amount,date,description,category}
    // console.log(newExpense);

    this.service.updateUser(data, id).subscribe((data) => {

      this.getall();

    })

  }
  update(data: any){
    // this.username=this.userForm.value;

    if (!this.userForm.valid) {
      console.log('!!!', this.userForm.value)
      this.userForm.markAllAsTouched();
      // this.showTopCenter()
      this.showTopCenter('error', 'Please fill mandatory fields!', 500000);
      this.Dvisible = false;
       

    }
    else {

      // this.showTopCenter('success', 'Expense added successfully!', 500000);     
      this.sidebarVisible = true;
      this.DialogUpdate = true;
      this.UpdateVar = data

      console.log("uppppppppppppppppppppppp aray",this.UpdateVar);
      

      

    }

    // this.show = true

    // this.router.navigate(['/AddUser/Home']); 
  }
  YesConformationUpdate(){
    this.sidebarVisible = false;
    // this.Dvisible = false;
    this.DialogUpdate = false;
    console.log("oooooooooooo");

    // this.messageService.add({ severity: 'success', summary: "Success", sticky: true , life:4500 });
    this.showTopCenter('success', 'Update Expense Successfully!', 5000);
    
    this.Update(this.UpdateVar)
    // this.getall();

  }

  NoconformationUpdate(){
    this.DialogUpdate = false

  }

  submit() {
    // this.username=this.userForm.value;

    if (!this.userForm.valid) {
      console.log('!!!', this.userForm.value)
      this.userForm.markAllAsTouched();
      // this.showTopCenter()
      this.showTopCenter('error', 'Please fill mandatory fields!', 500000);
      this.Dvisible = false;


    }
    else {

      // this.showTopCenter('success', 'Expense added successfully!', 500000);     
      this.sidebarVisible = true;
      this.Dvisible = true;


    }

    // this.show = true

    // this.router.navigate(['/AddUser/Home']); 
  }

  YesConformation() {
    this.sidebarVisible = false;
    this.Dvisible = false;
    console.log("oooooooooooo");

    // this.messageService.add({ severity: 'success', summary: "Success", sticky: true , life:4500 });
    this.showTopCenter('success', 'Add Expense Successfully!', 5000);
    this.addUser();
    // this.getall();
  }

  Noconformation() {
    this.Dvisible = false
  }

  showTopCenter(severity: string, summary: string, life: number, stick?: boolean) {
    this.messageService.add({ severity: severity, summary: summary, sticky: stick, life: life });
  }



  addUser() {
    let AddUserForm = this.userForm.value;

    // const { name, Amount, date, description } = this.userForm.value;
    // console.log(this.userForm.value)
    // const { value } = this.userForm.value.category
    // const category: string = value


    // console.log(name, Amount, date, description, value)
    // const newExpense: { name: string, category: string , Amount: number, date: Date, description: string} = { name, category,Amount, date, description  }
    console.log('ccccccccccccccccccccccccccccccccccccccccccc', AddUserForm.date);

    this.service.createUser(AddUserForm).subscribe((data) => {
      this.getall();
    });

  }


  deleteUser(id: any) {
    // this.router.navigate(['/AddUser']);
    this.DialogDelete = true
    this.DeleteId = id;
    console.log("del-------------------", id);
   


  }
  YesConformationDelete(){
    this.service.deleteUser(this.DeleteId).subscribe((data) => {
      
      this.getall();
      this.DialogDelete = false
    })
    this.showTopCenter('success', 'Delete Expense Successfully!', 5000);
  }

  NoConformationDelete(){
    this.DialogDelete = false
  }


  getUserById(Data: any) {
    //  console.log(Data);


  }


  myfun() {
    console.log(this.service.getExpenceList);
    this.sidebarVisible = true

  }

  cancelButton() {
    this.sidebarVisible = false  
  }



  






  initializeForm() {
    this.userForm = this.fb.group({
      name: [null, [Validators.required]],
      categoryId: [null, [Validators.required]],
      Amount: [null, [Validators.required]],
      date: [null, [Validators.required]],
      description: [null, [Validators.required]],
    });

  }

  get form() {
    return this.userForm.controls;
  }





}

interface category{
  name:string
  id:number
}