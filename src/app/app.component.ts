import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chatui';
  constructor( public router : Router){

  }

  onRooms(){
    this.router.navigate(['/room'])
    
  }
}
