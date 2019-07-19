import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor( private http: HttpClient) { }

  create( contactData) { // 1. get the form data from comp
    console.log(contactData);
    //2. send the data to rest api
        //2.1 identify the api -- http://jsonplaceholder.typicode.com/users
        //2.2. send the data by POST method   
    return this.http.post("http://jsonplaceholder.typicode.com/users", contactData)
          .pipe( map(resp => { //3. get the resp from rest api 
            console.log(resp);
            return resp;  //4. send it back to comp 
          }));
  }

  getContacts(){
    return this.http.get("http://jsonplaceholder.typicode.com/users")
          .pipe( map(resp => { //3. get the resp from rest api 
            console.log(resp);
            return resp;  //4. send it back to comp 
          }));
  }

  getContactById(id: string){
    return this.http.get("http://jsonplaceholder.typicode.com/users/"+id)
          .pipe( map(resp => { //3. get the resp from rest api 
            console.log(resp);
            return resp;  //4. send it back to comp 
          }));

  }

  updateContact(contactData){
    return this.http.put("http://jsonplaceholder.typicode.com/users/"+contactData.id, contactData)
          .pipe( map(resp => { //3. get the resp from rest api 
            console.log(resp);
            return resp;  //4. send it back to comp 
          }));
  }

  deleteContact(contactId){
    
  }
}
