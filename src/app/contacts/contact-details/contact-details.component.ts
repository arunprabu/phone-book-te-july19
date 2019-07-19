import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ContactService } from '../contact.service';

declare var $:any;  // integrate jquery

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: []
})
export class ContactDetailsComponent implements OnInit {

  contactData: any;
  duplicateContactData: any;
  isSaved: boolean;

  constructor( private activatedRoute: ActivatedRoute, private contactService: ContactService) { }

  ngOnInit() {
    //1. read the url parameter
    let _contactId = this.activatedRoute.snapshot.paramMap.get('id');
    //alternate way
    //let _contactId = this.activatedRoute.snapshot.params.id;
    
    //send a req to service
    this.contactService.getContactById(_contactId) 
        .subscribe( resp => {  //get the resp from service 
          console.log(resp);
          this.contactData = resp;
        });
   
  }

  onEditBtnClick(){
    //open the modal thru js 
    $('#editContactModal').modal('show');

    // duplicate 
    this.duplicateContactData = JSON.parse(JSON.stringify(this.contactData));
  }

  onUpdateHandler(formData: any){
    console.log(formData);
    console.log(this.duplicateContactData);

    this.contactService.updateContact(this.duplicateContactData)
      .subscribe( resp => {
        console.log(resp);
        this.isSaved = true;
        setTimeout( () => {
          $('#editContactModal').modal('hide');
          this.contactData = resp;
        }, 3000);
      });
  }
}
