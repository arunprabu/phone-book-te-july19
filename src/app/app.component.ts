import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //see the selector in index.html 
  templateUrl: './app.component.html', //html
  styleUrls: ['./app.component.css'] //css
})
export class AppComponent {
  //ts 
  title = "phone-book-te-july19";

  add(x: number, y: number ): number{
    return x + y;
  }
}
