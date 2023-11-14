import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {

  userForm!:FormGroup;
  hobbiesForm!: FormGroup;
  show:boolean = false

  constructor(private fb: FormBuilder){}
  
  ngOnInit(){
    this.initializeForm();
    this.formvalueChange();

  }

  formvalueChange() {
    
      
  }


  initializeForm() {
    this.userForm = this.fb.group({
      name:[null,[Validators.required]],
      email:[null,[Validators.required]],
      mobile:[null,[Validators.required]],
      country:['',[Validators.required]],
      gender:['',[Validators.required]],  
      date:['',[Validators.required]],  
      cricket: [null,[Validators.required]],
      music: [null,[Validators.required]],
      dance: [null,[Validators.required]],
      address: this.fb.group({
       DoorNum: ['',[Validators.required]]
      //  streetName:['',[Validators.required]],
      //  state:['',[Validators.required]]
      })
      
      // hobbies: this.fb.array([])
       // Initialize hobbies as a FormArray
      // hobbies: [null, [Validators.required]]
      
  
    })
      // Initialize the form
      // this.hobbiesForm = this.fb.group({
      //   reading: false,
      //   gaming: false,
      //   traveling: false,
      // });

      // Subscribe to form value changes
      // this.hobbiesForm.valueChanges.subscribe(values => {
      //   console.log('Selected Hobbies:', values);
      // });
    }
  
  get form(){
    return this.userForm.controls;
  }


  myfun(){
  
    // console.log(this.form['name'].value);
    console.log(this.userForm.value);
    this.show = true
    // console.log(this.hobbiesForm.value)
    
    
  }
  

}
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-reactive-form',
//   templateUrl: './reactive-form.component.html',
//   styleUrls: ['./reactive-form.component.scss']
// })
// export class ReactiveFormComponent {

//   userForm!: FormGroup;

//   constructor(private fb: FormBuilder) {}

//   ngOnInit() {
//     this.initializeForm();
//     this.formvalueChange();
//   }

//   formvalueChange() {
//     const hobbiesControl = this.userForm.get('hobbies');
  
//     if (hobbiesControl) {
//       hobbiesControl.valueChanges.subscribe((hobbies: string[]) => {
//         console.log('Selected Hobbies:', hobbies);
//       });
//     }
//   }

//   initializeForm() {
//     this.userForm = this.fb.group({
//       name: [null, [Validators.required]],
//       email: [null, [Validators.required]],
//       mobile: [null, [Validators.required]],
//       country: ['', [Validators.required]],
//       gender: ['', [Validators.required]],
//       hobbies: this.fb.array([]) // Initialize hobbies as a FormArray
//     });
//   }

//   get form() {
//     return this.userForm.controls;
//   }

//   myfun() {
//     console.log(this.userForm.value);
//   }
// }




