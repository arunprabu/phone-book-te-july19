import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  birthday = new Date(1988, 3, 15); // April 15, 1988

  loremIpsum: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur assumenda error sapiente totam incidunt, repellat odio consequatur voluptas debitis deserunt, ab ullam ad ipsa, fugiat deleniti! Fugiat amet eum non!"

  constructor() { }

  ngOnInit() {
  }

}
