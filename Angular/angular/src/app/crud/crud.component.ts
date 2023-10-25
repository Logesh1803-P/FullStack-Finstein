import { Component } from '@angular/core';
import { CrudServicesService } from '../crud-services.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CRUDComponent {


  dataObj:any[] = []
  name: any;
  age: any;
  
  constructor(private service : CrudServicesService){}
  ngOnInit(): void{
      
    this.dataObj = this.service.readData()

  }

  createData() {
    const newItem = {name : this.name , age : this.age}

    this.service.createDate(newItem);
    this.dataObj = this.service.readData()
    // this.clearForm;
    }

    // clearForm() {
    //   this.name = '';
    //   this.age = ''
    // }


  updateData(index: number,item: any) {

    this.service.updateData(index,item)

    this.dataObj = this.service.readData()

     
  }


  deleteData(index: number) {
    this.service.deleteData(index)
     
  }
}
