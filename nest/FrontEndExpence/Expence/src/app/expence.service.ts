import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpenceService {
  apiUrl = "http://localhost:3000/Expence"

  constructor(private htttpclient:HttpClient)  {
    
  }

  getExpenceList(){
    return this.htttpclient.get(this.apiUrl+'/getUsers')
  }

  createUser(data:any){

    console.log('service',data);
    
    return this.htttpclient.post(this.apiUrl+'/createUser',data)
  }

  editUser(id:any){
   
    return this.htttpclient.get(this.apiUrl+'/getUser/'+id)
    // console.log("id from service3",id);
    
    // return this.htttpclient.get(this.apiUrl+'/getUser/${id}',id)
   
  }
  updateUser(data:any,id:any){

    console.log('uuuuuuuuuuuuuuuuu',data);
    console.log("iiiiiiiiiiiiiiiid",id);
    
    
    return this.htttpclient.put(this.apiUrl+'/updateUser/'+id,data)

  }

  getUserById(id:any){
    console.log('from services = ',id);
    
 }
   
 deleteUser(id:any){
  return this.htttpclient.delete(this.apiUrl+'/softDelete/'+id)
 }
 
}
