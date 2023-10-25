import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudServicesService {
  
  private data: any[]=[]
  
  constructor() { }

  readData():any{
    return this.data
  }

  createDate(obj:any){
    this.data.push(obj)
    console.log(this.data);
    
  }

  updateData(index: number, item: any) {
    if (index >= 0 && index < this.data.length) {
      this.data[index] = item;
      console.log("Service",index,item);
      
    }
  }

  deleteData(index:number){
    if(index >= 0 && index < this.data.length){
      this.data.splice(index,1)
    }
  }

}
