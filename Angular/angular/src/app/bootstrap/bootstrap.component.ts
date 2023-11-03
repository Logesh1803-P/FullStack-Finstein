import { Component } from '@angular/core';
import { Bootstrap } from '../bootstrap';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.scss']
})
export class BootstrapComponent {

  show=false;
  check!:boolean;
  student = new Bootstrap('','','','',"",false)


  fun() {
    this.show = true;
    this.check = this.show
    
    if(this.check === true) 
        console.log(this.student)       
    }
}
