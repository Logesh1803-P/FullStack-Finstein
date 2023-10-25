import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'angular';
  myvar:string = 'hey loki'; 

// -------------------------------from parent to child -> variable pass

  test_p_c:string = "p-c";



//----------------------------------------------------------------


  myfun(events:any) {
    console.log(events);
    console.log(`parent ${events}`);
  
  } 

   // Event binding for c-p

  // testCp(event:any){
  //   console.log(event);    
  // } 

 c_p_t(event:any)
 {
  console.log(event);
  
 }
 myTom(tom:any){
  console.log(tom);
  
 }

}
