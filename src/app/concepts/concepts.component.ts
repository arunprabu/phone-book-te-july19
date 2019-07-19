import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CebComponent } from './ceb/ceb.component';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
    `
    .red{
      color: red;
    }

    .green{
      color: green;
    }
    `
  ]
})
export class ConceptsComponent implements OnInit, AfterViewInit {
  //ts 
  // String Interpolation
  conceptName: string = "String Interpolation";
  devExp: number = 13;
  isLoggedIn: boolean = true;
  skillList: string[] = [
    'js', 'nodejs', 'ng'
  ];

  
  //Property Binding 
  featureName: string = "Property Binding";

  //two way binding
  appName: string = "Phone Book";

  //custom evt binding - to receive data
  profileData: any = {
    name: '',
    city: ''
  };

  //accessing child component data from parent
  @ViewChild(CebComponent) cebData;

  constructor() { }

  ngOnInit() {
  }

  //ngAfterViewInit called only after child component's view is rendered
  ngAfterViewInit(){
    console.log(this.cebData);
  }
 
  //used in both string interpolation and property binding 
  isAuthenticated(){
    return this.isLoggedIn;
  }

  //event binding 
  onBtnClick(evt: any ){
    console.log(evt);
    alert("clicked");
  }

  getMyAge(){
    return 60;
  }

  onProfileLoadedHandler( evt: any){
    console.log(evt);
    this.profileData = evt;
    console.log("Custom event handled");
  }


}
