import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ContactService } from './contact.service';
import { Contact } from './contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: []
})
export class ContactsComponent implements OnInit, OnDestroy {

  contactList: Contact[];
  contactsSubscription: Subscription;

  constructor( private contactService: ContactService) { 

  }

  ngOnInit() {
    console.log("ngOnInit")
    this.contactsSubscription = this.contactService.getContacts()
        .subscribe( (resp: Contact[]) => {
          console.log(resp);
          this.contactList = resp;
        });
  }

  ngOnDestroy(){
    console.log("on Destroy");
    this.contactsSubscription.unsubscribe();
    this.contactList.length = 0;
  }

}
