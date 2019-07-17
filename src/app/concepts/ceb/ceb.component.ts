import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: []
})
export class CebComponent implements OnInit {

  //Step1: Define a custom event
  @Output() myProfileLoaded = new EventEmitter<any>();

  myProfile: any = {
    name: "Arun",
    city: "Chn"
  }

  constructor() { 
    console.log("Inside Constructor");
  }

  //life cycle hook
  ngOnInit() {
    console.log("Inside ngOnInit");
  }

  loadProfile(){
    //Step2: Emit the custom event 
    this.myProfileLoaded.emit(this.myProfile);
    //Refer conceps.comp.html -- for step 3
  }
}
