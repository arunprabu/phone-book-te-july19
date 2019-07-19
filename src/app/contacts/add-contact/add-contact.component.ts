import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: []
})
export class AddContactComponent implements OnInit {

  //Step 1: Create Form group
  contactForm: FormGroup;
  isSaved: boolean;

  constructor( private contactService: ContactService) { //1. connect to service 
  }

  ngOnInit() {
    //Step 2: 
    this.contactForm = new FormGroup({
      //Step3: 
       // we'll create new form controls 
       name: new FormControl('', Validators.required),
       email: new FormControl('', [
          Validators.required, 
          Validators.email
       ]),
       phone: new FormControl('', Validators.required),
    });
  }

  onAddContactHandler(){
    console.log("Submitted");
    console.log(this.contactForm.value);

    //2. send the data to service 
    this.contactService.create(this.contactForm.value)
        .subscribe( (resp: any) => { //3. get the resp from service 
          console.log(resp);  
          if(resp && resp.id){
            this.isSaved = true;
          }
        }); 
  }

}
